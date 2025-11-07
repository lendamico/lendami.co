// Filters
const dateFilter = require('./src/filters/date-filter.js');
const dateStamp = require('./src/filters/date-stamp.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = (config) => {
	// Set directories to pass through to the dist folder
	config.addPassthroughCopy('./src/images/');	
	
	// Add filters
	config.addFilter('dateFilter', dateFilter);
	config.addFilter('dateStamp', dateStamp);
	config.addFilter('w3DateFilter', w3DateFilter);
	
	// Define globs for each content type
	const postsGlob     = "./src/posts/*.md";
	const notesGlob     = "./src/notes/*.md";
	const playlistsGlob = "./src/playlists/*.md";
	const linksGlob     = "./src/links/*.md";
	const photosGlob     = "./src/photos/*.md";
	const nowGlob       = "./src/now/*.md";
  	const usesGlob   	= "./src/uses/*.md";

	// Individual collections (as you likely already have)
  	config.addCollection("posts",     api => api.getFilteredByGlob(postsGlob));
  	config.addCollection("notes",     api => api.getFilteredByGlob(notesGlob));
  	config.addCollection("playlists", api => api.getFilteredByGlob(playlistsGlob));
  	config.addCollection("links",     api => api.getFilteredByGlob(linksGlob));
	config.addCollection("photos",    api => api.getFilteredByGlob(photosGlob));
  	config.addCollection("now",       api => api.getFilteredByGlob(nowGlob));
  	config.addCollection("uses",      api => api.getFilteredByGlob(usesGlob));

	 // Combined "firehose" collection
  	config.addCollection("firehose", (api) => {
    const posts     = api.getFilteredByGlob(postsGlob);
    const notes     = api.getFilteredByGlob(notesGlob);
    const playlists = api.getFilteredByGlob(playlistsGlob);
    const links     = api.getFilteredByGlob(linksGlob);
	const photos     = api.getFilteredByGlob(photosGlob);
    const now       = api.getFilteredByGlob(nowGlob);

    const combined = [
      ...posts,
      ...notes,
      ...playlists,
      ...links,
	  ...photos,
      ...now
    ];

	 // Deduplicate by URL (just in case)
    const unique = Array.from(new Set(combined.map(i => i.url)))
      .map(url => combined.find(i => i.url === url));

    // Sort by newest first (fallback to 0 if no date)
    return unique.sort((a, b) => (b.date || 0) - (a.date || 0));
  });
	
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