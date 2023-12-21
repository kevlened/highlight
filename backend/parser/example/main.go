package main

import (
	"github.com/antlr4-go/antlr/v4"
	parser "github.com/highlight-run/highlight/backend/parser/antlr"
	"github.com/highlight-run/highlight/backend/parser/listener"
)

func Parse(program string) {
	is := antlr.NewInputStream(program)
	lexer := parser.NewSearchGrammarLexer(is)
	stream := antlr.NewCommonTokenStream(lexer, antlr.TokenDefaultChannel)
	p := parser.NewSearchGrammarParser(stream)
	listener := listener.NewSearchListener()

	antlr.ParseTreeWalkerDefault.Walk(listener, p.Search_query())
}

func main() {
	Parse("  span_name=\"Chris Schmitz\" source=(backend OR frontend) OR  service_name!=private-graph span_name=gorm.Query testing")
}
