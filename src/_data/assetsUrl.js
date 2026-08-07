module.exports = () => (
	process.env.CONTEXT === 'production'
		? 'https://assets.lendami.co'
		: 'https://assets-lendami-co.netlify.app'
);
