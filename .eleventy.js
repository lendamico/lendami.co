const { minify } = require('html-minifier-terser');

const dateFilter = require('./src/filters/date-filter.js');
const dateStamp = require('./src/filters/date-stamp.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = (config) => {
	config.addPassthroughCopy('./src/img/');

	config.addFilter('dateFilter', dateFilter);
	config.addFilter('dateStamp', dateStamp);
	config.addFilter('w3DateFilter', w3DateFilter);

	// Group an array of Eleventy collection items by a frontmatter field,
	// returning [{grouper, list}] sorted alphabetically — used by the Uses index page.
	config.addFilter('groupByData', (arr, key) => {
		const groups = {};
		for (const item of arr) {
			const grouper = item.data[key] || 'Uncategorized';
			if (!groups[grouper]) groups[grouper] = [];
			groups[grouper].push(item);
		}
		return Object.keys(groups)
			.sort((a, b) => a.localeCompare(b))
			.map(grouper => ({
				grouper,
				list: groups[grouper].sort((a, b) =>
					(a.data.title || '').localeCompare(b.data.title || '')
				),
			}));
	});

	if (process.env.NODE_ENV === 'production') {
		config.addTransform('htmlmin', async (content, outputPath) => {
			if (outputPath && outputPath.endsWith('.html')) {
				return minify(content, {
					collapseWhitespace: true,
					removeComments: true,
					minifyCSS: true,
					minifyJS: true,
				});
			}
			return content;
		});
	}

	const nowGlob = './src/now/*.md';
	const usesGlob = './src/uses/*.md';

	config.addCollection('now', api => api.getFilteredByGlob(nowGlob).reverse());
	config.addCollection('uses', api => api.getFilteredByGlob(usesGlob).reverse());

	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};
