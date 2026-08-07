module.exports = (value) => {
	const dateObject = new Date(value);
	const day = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
	const month = dateObject.toLocaleDateString('en-US', { month: 'long' });
	const date = dateObject.getUTCDate();
	const year = dateObject.getUTCFullYear();
	const suffix = ['th','st','nd','rd'][(date % 100 > 10 && date % 100 < 14) ? 0 : Math.min(date % 10, 4)] || 'th';
	return `${day}, ${month} ${date}${suffix}, ${year}`;
};
