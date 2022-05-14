const get = (req, res) => {
	res.renderSiteView('about', {
		document: {
			title: 'About Page',
		},
	});
};

module.exports = {
	get,
};
