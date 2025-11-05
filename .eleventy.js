// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = (config) => {
	// Add filters
	config.addFilter('dateFilter', dateFilter);
	config.addFilter('w3DateFilter', w3DateFilter);
	
	// Define globs for each content type
	const postsGlob     = "./src/posts/*.md";
	const notesGlob     = "./src/notes/*.md";
	const playlistsGlob = "./src/playlists/*.md";
	const linksGlob     = "./src/links/*.md";
	const nowGlob       = "./src/now/*.md";
  	const usesGlob   	= "./src/uses/*.md";

	// Individual collections (as you likely already have)
  	config.addCollection("posts",     api => api.getFilteredByGlob(postsGlob));
  	config.addCollection("notes",     api => api.getFilteredByGlob(notesGlob));
  	config.addCollection("playlists", api => api.getFilteredByGlob(playlistsGlob));
  	config.addCollection("links",     api => api.getFilteredByGlob(linksGlob));
  	config.addCollection("now",       api => api.getFilteredByGlob(nowGlob));
  	config.addCollection("uses",      api => api.getFilteredByGlob(usesGlob));

	 // Combined "firehose" collection
  	config.addCollection("firehose", (api) => {
    const posts     = api.getFilteredByGlob(postsGlob);
    const notes     = api.getFilteredByGlob(notesGlob);
    const playlists = api.getFilteredByGlob(playlistsGlob);
    const links     = api.getFilteredByGlob(linksGlob);
    const now       = api.getFilteredByGlob(nowGlob);

    const combined = [
      ...posts,
      ...notes,
      ...playlists,
      ...links,
      ...now
    ];

	 // Deduplicate by URL (just in case)
    const unique = Array.from(new Set(combined.map(i => i.url)))
      .map(url => combined.find(i => i.url === url));

    // Sort by newest first (fallback to 0 if no date)
    return unique.sort((a, b) => (b.date || 0) - (a.date || 0));
  });
	/* // Returns a collection of blog posts in reverse date order
	config.addCollection('posts', (collection) => {
		return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
	});
	// Returns a collection of notes in reverse date order
	config.addCollection('notes', (collection) => {
		return [...collection.getFilteredByGlob('./src/notes/*.md')].reverse();
	});
	// Returns a collection of link posts in reverse date order
	config.addCollection('links', (collection) => {
		return [...collection.getFilteredByGlob('./src/links/*.md')].reverse();
	});
	// Returns a collection of playlists in reverse date order
	config.addCollection('playlists', (collection) => {
		return [...collection.getFilteredByGlob('./src/playlists/*.md')].reverse();
	});
	// Returns a collection of uses posts in reverse date order
	config.addCollection('uses', (collection) => {
		return [...collection.getFilteredByGlob('./src/uses/*.md')].reverse();
	});
	// Returns a collection of now posts in reverse date order
	config.addCollection('now', (collection) => {
		return [...collection.getFilteredByGlob('./src/now/*.md')].reverse();
	}); */
	
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