module.exports = {
	extends: [
		'stylelint-config-standard',
	],
	plugins: [
		'stylelint-scss',
	],
	rules: {
		'indentation': ['tab'],
		'no-descending-specificity': null,
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': [true],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				'ignorePseudoClasses': [
					'export',
					'import'
				]
			}
		],
		'property-no-unknown': [
			true,
			{
				'ignoreSelectors': [
					':export',
					':import'
				]
			}
		],
	},
}