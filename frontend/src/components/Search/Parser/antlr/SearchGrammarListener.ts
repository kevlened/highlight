// Generated from ./antlr/SearchGrammar.g4 by ANTLR 4.13.1

import { ParseTreeListener } from 'antlr4'

import { Search_queryContext } from './SearchGrammarParser'
import { Col_exprContext } from './SearchGrammarParser'
import { Search_exprContext } from './SearchGrammarParser'
import { Search_keyContext } from './SearchGrammarParser'
import { Search_opContext } from './SearchGrammarParser'
import { Negation_opContext } from './SearchGrammarParser'
import { Bin_opContext } from './SearchGrammarParser'
import { Search_valueContext } from './SearchGrammarParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `SearchGrammarParser`.
 */
export default class SearchGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SearchGrammarParser.search_query`.
	 * @param ctx the parse tree
	 */
	enterSearch_query?: (ctx: Search_queryContext) => void
	/**
	 * Exit a parse tree produced by `SearchGrammarParser.search_query`.
	 * @param ctx the parse tree
	 */
	exitSearch_query?: (ctx: Search_queryContext) => void
	/**
	 * Enter a parse tree produced by `SearchGrammarParser.col_expr`.
	 * @param ctx the parse tree
	 */
	enterCol_expr?: (ctx: Col_exprContext) => void
	/**
	 * Exit a parse tree produced by `SearchGrammarParser.col_expr`.
	 * @param ctx the parse tree
	 */
	exitCol_expr?: (ctx: Col_exprContext) => void
	/**
	 * Enter a parse tree produced by `SearchGrammarParser.search_expr`.
	 * @param ctx the parse tree
	 */
	enterSearch_expr?: (ctx: Search_exprContext) => void
	/**
	 * Exit a parse tree produced by `SearchGrammarParser.search_expr`.
	 * @param ctx the parse tree
	 */
	exitSearch_expr?: (ctx: Search_exprContext) => void
	/**
	 * Enter a parse tree produced by `SearchGrammarParser.search_key`.
	 * @param ctx the parse tree
	 */
	enterSearch_key?: (ctx: Search_keyContext) => void
	/**
	 * Exit a parse tree produced by `SearchGrammarParser.search_key`.
	 * @param ctx the parse tree
	 */
	exitSearch_key?: (ctx: Search_keyContext) => void
	/**
	 * Enter a parse tree produced by `SearchGrammarParser.search_op`.
	 * @param ctx the parse tree
	 */
	enterSearch_op?: (ctx: Search_opContext) => void
	/**
	 * Exit a parse tree produced by `SearchGrammarParser.search_op`.
	 * @param ctx the parse tree
	 */
	exitSearch_op?: (ctx: Search_opContext) => void
	/**
	 * Enter a parse tree produced by `SearchGrammarParser.negation_op`.
	 * @param ctx the parse tree
	 */
	enterNegation_op?: (ctx: Negation_opContext) => void
	/**
	 * Exit a parse tree produced by `SearchGrammarParser.negation_op`.
	 * @param ctx the parse tree
	 */
	exitNegation_op?: (ctx: Negation_opContext) => void
	/**
	 * Enter a parse tree produced by `SearchGrammarParser.bin_op`.
	 * @param ctx the parse tree
	 */
	enterBin_op?: (ctx: Bin_opContext) => void
	/**
	 * Exit a parse tree produced by `SearchGrammarParser.bin_op`.
	 * @param ctx the parse tree
	 */
	exitBin_op?: (ctx: Bin_opContext) => void
	/**
	 * Enter a parse tree produced by `SearchGrammarParser.search_value`.
	 * @param ctx the parse tree
	 */
	enterSearch_value?: (ctx: Search_valueContext) => void
	/**
	 * Exit a parse tree produced by `SearchGrammarParser.search_value`.
	 * @param ctx the parse tree
	 */
	exitSearch_value?: (ctx: Search_valueContext) => void
}