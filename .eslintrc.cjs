module.exports = {
	env: {
		browser: true,
		es2020: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/jsx-runtime",
		"airbnb",
		"airbnb-typescript/base",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json",
	},
	plugins: [
		"@typescript-eslint",
		"react",
		"react-refresh",
		"unused-imports",
		"prefer-arrow",
		"prettier",
	],
	rules: {
		"prettier/prettier": ["error"],
		"react-refresh/only-export-components": "warn",
		"@typescript-eslint/no-unused-vars": ["error"],
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".tsx"],
			},
		],
		"react/jsx-props-no-spreading": "off",
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"import/prefer-default-export": "warn",
		"import/extensions": ["error", "never"],
		"no-plusplus": "off",
		"react/react-in-jsx-scope": 0,
		"react/jsx-uses-react": 0,
		radix: ["error", "as-needed"],
		"no-restricted-syntax": "off",
		"@typescript-eslint/explicit-function-return-type": "warn",
		"unused-imports/no-unused-imports": "error",
		"prefer-arrow/prefer-arrow-functions": [
			"warn",
			{
				disallowPrototype: true,
				singleReturnOnly: false,
				classPropertiesAllowed: false,
			},
		],
		"prefer-arrow-callback": [
			"warn",
			{
				allowNamedFunctions: true,
			},
		],
		"func-style": [
			"warn",
			"expression",
			{
				allowArrowFunctions: true,
			},
		],
	},
};
