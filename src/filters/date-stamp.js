module.exports = (value) => {
    const dateObject = new Date(value);
    const year = dateObject.getUTCFullYear();
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getUTCDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
};
