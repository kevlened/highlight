package listener

import (
	"fmt"
	"strings"

	"github.com/antlr4-go/antlr/v4"
	parser "github.com/highlight-run/highlight/backend/parser/antlr"
	"github.com/huandu/go-sqlbuilder"
)

// TODO: Think through logic for building up SQL queries from this. Will an
// expression be enough, or do we need additional grouping logic in case there
// are grouped expressions with parens, or it's required for OR logic? Or maybe
// we create a listener we can pass the SQL builder to, and it can build up the
// query as it walks the tree?

var DefaultFilterKey = "DEFAULT"
var DefaultFilterOp = "="

type searchListener struct {
	parser.SearchGrammarListener

	currentKey    string
	currentOp     string
	rules         []string
	sb            *sqlbuilder.SelectBuilder
	bodyColumn    string
	keysToColumns map[string]string
}

func NewSearchListener(sqlBuilder *sqlbuilder.SelectBuilder, bodyColumn string, keysToColumns map[string]string) *searchListener {
	return &searchListener{
		currentKey:    DefaultFilterKey,
		currentOp:     DefaultFilterOp,
		rules:         []string{},
		sb:            sqlBuilder,
		bodyColumn:    bodyColumn,
		keysToColumns: keysToColumns,
	}
}

func (s *searchListener) EnterSearch_query(ctx *parser.Search_queryContext) {}
func (s *searchListener) ExitSearch_query(ctx *parser.Search_queryContext) {
	s.sb.Where(s.rules...)
	fmt.Printf("::: RULES: %+v\n", s.rules)
}

func (s *searchListener) EnterTop_paren_col_expr(ctx *parser.Top_paren_col_exprContext) {}
func (s *searchListener) ExitTop_paren_col_expr(ctx *parser.Top_paren_col_exprContext)  {}

func (s *searchListener) EnterNegated_top_col_expr(ctx *parser.Negated_top_col_exprContext) {}
func (s *searchListener) ExitNegated_top_col_expr(ctx *parser.Negated_top_col_exprContext)  {}

func (s *searchListener) EnterTop_col_search_value(ctx *parser.Top_col_search_valueContext) {}
func (s *searchListener) ExitTop_col_search_value(ctx *parser.Top_col_search_valueContext)  {}

func (s *searchListener) EnterCol_paren_expr(ctx *parser.Col_paren_exprContext) {}
func (s *searchListener) ExitCol_paren_expr(ctx *parser.Col_paren_exprContext)  {}

func (s *searchListener) EnterNegated_col_expr(ctx *parser.Negated_col_exprContext) {}
func (s *searchListener) ExitNegated_col_expr(ctx *parser.Negated_col_exprContext) {
	rule := s.rules[len(s.rules)-1]
	s.rules = s.rules[:len(s.rules)-1]
	s.rules = append(s.rules, fmt.Sprintf("NOT (%s)", rule))
}

func (s *searchListener) EnterAnd_col_expr(ctx *parser.And_col_exprContext) {}
func (s *searchListener) ExitAnd_col_expr(ctx *parser.And_col_exprContext) {
	rules := s.rules[len(s.rules)-2:]
	s.rules = s.rules[:len(s.rules)-2]
	s.rules = append(s.rules, s.sb.And(rules...))
}

func (s *searchListener) EnterOr_col_expr(ctx *parser.Or_col_exprContext) {}
func (s *searchListener) ExitOr_col_expr(ctx *parser.Or_col_exprContext) {
	rules := s.rules[len(s.rules)-2:]
	s.rules = s.rules[:len(s.rules)-2]
	s.rules = append(s.rules, s.sb.Or(rules...))
}

func (s *searchListener) EnterCol_search_value(ctx *parser.Col_search_valueContext) {}
func (s *searchListener) ExitCol_search_value(ctx *parser.Col_search_valueContext)  {}

func (s *searchListener) EnterNegated_search_expr(ctx *parser.Negated_search_exprContext) {}
func (s *searchListener) ExitNegated_search_expr(ctx *parser.Negated_search_exprContext) {
	rule := s.rules[len(s.rules)-1]
	s.rules = s.rules[:len(s.rules)-1]
	s.rules = append(s.rules, fmt.Sprintf("NOT (%s)", rule))
}

func (s *searchListener) EnterBody_search_expr(ctx *parser.Body_search_exprContext) {}
func (s *searchListener) ExitBody_search_expr(ctx *parser.Body_search_exprContext)  {}

func (s *searchListener) EnterAnd_search_expr(ctx *parser.And_search_exprContext) {}
func (s *searchListener) ExitAnd_search_expr(ctx *parser.And_search_exprContext) {
	rules := s.rules[len(s.rules)-2:]
	s.rules = s.rules[:len(s.rules)-2]
	s.rules = append(s.rules, s.sb.And(rules...))
}

func (s *searchListener) EnterOr_search_expr(ctx *parser.Or_search_exprContext) {}
func (s *searchListener) ExitOr_search_expr(ctx *parser.Or_search_exprContext) {
	rules := s.rules[len(s.rules)-2:]
	s.rules = s.rules[:len(s.rules)-2]
	s.rules = append(s.rules, s.sb.Or(rules...))
}

func (s *searchListener) EnterKey_val_search_expr(ctx *parser.Key_val_search_exprContext) {}
func (s *searchListener) ExitKey_val_search_expr(ctx *parser.Key_val_search_exprContext)  {}

func (s *searchListener) EnterParen_search_expr(ctx *parser.Paren_search_exprContext) {}
func (s *searchListener) ExitParen_search_expr(ctx *parser.Paren_search_exprContext)  {}

func (s *searchListener) EnterSearch_key(ctx *parser.Search_keyContext) {
	s.currentKey = ctx.GetText()
}
func (s *searchListener) ExitSearch_key(ctx *parser.Search_keyContext) {}

func (s *searchListener) EnterAnd_op(ctx *parser.And_opContext) {}
func (s *searchListener) ExitAnd_op(ctx *parser.And_opContext)  {}

func (s *searchListener) EnterOr_op(ctx *parser.Or_opContext) {}
func (s *searchListener) ExitOr_op(ctx *parser.Or_opContext)  {}

func (s *searchListener) EnterNegation_op(ctx *parser.Negation_opContext) {}
func (s *searchListener) ExitNegation_op(ctx *parser.Negation_opContext)  {}

func (s *searchListener) EnterBin_op(ctx *parser.Bin_opContext) {
	s.currentOp = ctx.GetText()
}
func (s *searchListener) ExitBin_op(ctx *parser.Bin_opContext) {}

func (s *searchListener) EnterId_search_value(ctx *parser.Id_search_valueContext) {
	s.appendRules(ctx.GetText())
}
func (s *searchListener) ExitId_search_value(ctx *parser.Id_search_valueContext) {}

func (s *searchListener) EnterString_search_value(ctx *parser.String_search_valueContext) {
	// TODO: Think about removing labels and just doing this to all search values
	value := strings.Trim(ctx.GetText(), "\"")
	s.appendRules(value)
}
func (s *searchListener) ExitString_search_value(ctx *parser.String_search_valueContext) {}

func (s *searchListener) VisitTerminal(node antlr.TerminalNode)      {}
func (s *searchListener) VisitErrorNode(node antlr.ErrorNode)        {}
func (s *searchListener) EnterEveryRule(ctx antlr.ParserRuleContext) {}
func (s *searchListener) ExitEveryRule(ctx antlr.ParserRuleContext)  {}

func (s *searchListener) appendRules(value string) {
	// TODO: Get keys from table config
	filterKey := s.keysToColumns[s.currentKey]

	switch s.currentOp {
	case "=":
		s.rules = append(s.rules, s.sb.Equal(filterKey, value))
	case ":":
		s.rules = append(s.rules, s.sb.Equal(filterKey, value))
	case "!=":
		s.rules = append(s.rules, s.sb.NotEqual(filterKey, value))
	case ">":
		s.rules = append(s.rules, s.sb.GreaterThan(filterKey, value))
	case ">=":
		s.rules = append(s.rules, s.sb.GreaterEqualThan(filterKey, value))
	case "<":
		s.rules = append(s.rules, s.sb.LessThan(filterKey, value))
	case "<=":
		s.rules = append(s.rules, s.sb.LessEqualThan(filterKey, value))
	default:
		fmt.Printf("Unknown search operator: %s\n", s.currentOp)
	}
}
