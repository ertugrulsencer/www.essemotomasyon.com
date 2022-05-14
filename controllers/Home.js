const get = (req, res) => {
	res.renderSiteView('home', {
		document: {
			title: 'Home Page',
		},
	});
};

module.exports = {
	get,
};
