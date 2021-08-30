module.exports = {
	globDirectory: 'DSA-Test/',
	globPatterns: [
		'*/*.{png,ico,jpg,JPG,gif,css,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js',
	runtimeCaching: [{
		// Match any request that ends with .png, .jpg, .jpeg or .svg.
		urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
	
		// Apply a cache-first strategy.
		handler: 'CacheFirst',
	
		options: {
		  // Use a custom cache name.
		  cacheName: 'images',
	
		  // Only cache 10 images.
		  expiration: {
			maxEntries: 10,
		  },
		},
	  }],
};