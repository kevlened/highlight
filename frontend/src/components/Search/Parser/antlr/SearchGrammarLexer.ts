// Generated from ./antlr/SearchGrammar.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState,
	DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token,
} from 'antlr4'
export default class SearchGrammarLexer extends Lexer {
	public static readonly AND = 1
	public static readonly OR = 2
	public static readonly NOT = 3
	public static readonly EQ = 4
	public static readonly NEQ = 5
	public static readonly LT = 6
	public static readonly LTE = 7
	public static readonly GT = 8
	public static readonly GTE = 9
	public static readonly LPAREN = 10
	public static readonly RPAREN = 11
	public static readonly COLON = 12
	public static readonly ID = 13
	public static readonly STRING = 14
	public static readonly WS = 15
	public static readonly ERROR_CHAR = 16
	public static readonly EOF = Token.EOF

	public static readonly channelNames: string[] = [
		'DEFAULT_TOKEN_CHANNEL',
		'HIDDEN',
	]
	public static readonly literalNames: (string | null)[] = [
		null,
		"'AND'",
		"'OR'",
		"'NOT'",
		"'='",
		"'!='",
		"'<'",
		"'<='",
		"'>'",
		"'>='",
		"'('",
		"')'",
		"':'",
	]
	public static readonly symbolicNames: (string | null)[] = [
		null,
		'AND',
		'OR',
		'NOT',
		'EQ',
		'NEQ',
		'LT',
		'LTE',
		'GT',
		'GTE',
		'LPAREN',
		'RPAREN',
		'COLON',
		'ID',
		'STRING',
		'WS',
		'ERROR_CHAR',
	]
	public static readonly modeNames: string[] = ['DEFAULT_MODE']

	public static readonly ruleNames: string[] = [
		'AND',
		'OR',
		'NOT',
		'EQ',
		'NEQ',
		'LT',
		'LTE',
		'GT',
		'GTE',
		'LPAREN',
		'RPAREN',
		'COLON',
		'ID',
		'STRING',
		'WS',
		'ERROR_CHAR',
	]

	constructor(input: CharStream) {
		super(input)
		this._interp = new LexerATNSimulator(
			this,
			SearchGrammarLexer._ATN,
			SearchGrammarLexer.DecisionsToDFA,
			new PredictionContextCache(),
		)
	}

	public get grammarFileName(): string {
		return 'SearchGrammar.g4'
	}

	public get literalNames(): (string | null)[] {
		return SearchGrammarLexer.literalNames
	}
	public get symbolicNames(): (string | null)[] {
		return SearchGrammarLexer.symbolicNames
	}
	public get ruleNames(): string[] {
		return SearchGrammarLexer.ruleNames
	}

	public get serializedATN(): number[] {
		return SearchGrammarLexer._serializedATN
	}

	public get channelNames(): string[] {
		return SearchGrammarLexer.channelNames
	}

	public get modeNames(): string[] {
		return SearchGrammarLexer.modeNames
	}

	public static readonly _serializedATN: number[] = [
		4, 0, 16, 88, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2,
		4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
		10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2,
		15, 7, 15, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2,
		1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 7,
		1, 7, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12,
		4, 12, 67, 8, 12, 11, 12, 12, 12, 68, 1, 13, 1, 13, 5, 13, 73, 8, 13,
		10, 13, 12, 13, 76, 9, 13, 1, 13, 1, 13, 1, 14, 4, 14, 81, 8, 14, 11,
		14, 12, 14, 82, 1, 14, 1, 14, 1, 15, 1, 15, 1, 74, 0, 16, 1, 1, 3, 2, 5,
		3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25,
		13, 27, 14, 29, 15, 31, 16, 1, 0, 2, 6, 0, 42, 42, 45, 46, 48, 57, 65,
		90, 95, 95, 97, 122, 3, 0, 9, 10, 12, 13, 32, 32, 90, 0, 1, 1, 0, 0, 0,
		0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0,
		0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0,
		0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0,
		0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 1, 33, 1,
		0, 0, 0, 3, 37, 1, 0, 0, 0, 5, 40, 1, 0, 0, 0, 7, 44, 1, 0, 0, 0, 9, 46,
		1, 0, 0, 0, 11, 49, 1, 0, 0, 0, 13, 51, 1, 0, 0, 0, 15, 54, 1, 0, 0, 0,
		17, 56, 1, 0, 0, 0, 19, 59, 1, 0, 0, 0, 21, 61, 1, 0, 0, 0, 23, 63, 1,
		0, 0, 0, 25, 66, 1, 0, 0, 0, 27, 70, 1, 0, 0, 0, 29, 80, 1, 0, 0, 0, 31,
		86, 1, 0, 0, 0, 33, 34, 5, 65, 0, 0, 34, 35, 5, 78, 0, 0, 35, 36, 5, 68,
		0, 0, 36, 2, 1, 0, 0, 0, 37, 38, 5, 79, 0, 0, 38, 39, 5, 82, 0, 0, 39,
		4, 1, 0, 0, 0, 40, 41, 5, 78, 0, 0, 41, 42, 5, 79, 0, 0, 42, 43, 5, 84,
		0, 0, 43, 6, 1, 0, 0, 0, 44, 45, 5, 61, 0, 0, 45, 8, 1, 0, 0, 0, 46, 47,
		5, 33, 0, 0, 47, 48, 5, 61, 0, 0, 48, 10, 1, 0, 0, 0, 49, 50, 5, 60, 0,
		0, 50, 12, 1, 0, 0, 0, 51, 52, 5, 60, 0, 0, 52, 53, 5, 61, 0, 0, 53, 14,
		1, 0, 0, 0, 54, 55, 5, 62, 0, 0, 55, 16, 1, 0, 0, 0, 56, 57, 5, 62, 0,
		0, 57, 58, 5, 61, 0, 0, 58, 18, 1, 0, 0, 0, 59, 60, 5, 40, 0, 0, 60, 20,
		1, 0, 0, 0, 61, 62, 5, 41, 0, 0, 62, 22, 1, 0, 0, 0, 63, 64, 5, 58, 0,
		0, 64, 24, 1, 0, 0, 0, 65, 67, 7, 0, 0, 0, 66, 65, 1, 0, 0, 0, 67, 68,
		1, 0, 0, 0, 68, 66, 1, 0, 0, 0, 68, 69, 1, 0, 0, 0, 69, 26, 1, 0, 0, 0,
		70, 74, 5, 34, 0, 0, 71, 73, 9, 0, 0, 0, 72, 71, 1, 0, 0, 0, 73, 76, 1,
		0, 0, 0, 74, 75, 1, 0, 0, 0, 74, 72, 1, 0, 0, 0, 75, 77, 1, 0, 0, 0, 76,
		74, 1, 0, 0, 0, 77, 78, 5, 34, 0, 0, 78, 28, 1, 0, 0, 0, 79, 81, 7, 1,
		0, 0, 80, 79, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0, 82, 80, 1, 0, 0, 0, 82,
		83, 1, 0, 0, 0, 83, 84, 1, 0, 0, 0, 84, 85, 6, 14, 0, 0, 85, 30, 1, 0,
		0, 0, 86, 87, 9, 0, 0, 0, 87, 32, 1, 0, 0, 0, 4, 0, 68, 74, 82, 1, 6, 0,
		0,
	]

	private static __ATN: ATN
	public static get _ATN(): ATN {
		if (!SearchGrammarLexer.__ATN) {
			SearchGrammarLexer.__ATN = new ATNDeserializer().deserialize(
				SearchGrammarLexer._serializedATN,
			)
		}

		return SearchGrammarLexer.__ATN
	}

	static DecisionsToDFA = SearchGrammarLexer._ATN.decisionToState.map(
		(ds: DecisionState, index: number) => new DFA(ds, index),
	)
}
