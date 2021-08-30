module.exports = {
	globDirectory: 'DSA-Test/',
	globPatterns: [
		'**/*.{png,ico,jpg,JPG,gif,css,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'DSA-Test/js/sw.js'
};