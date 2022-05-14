const comp = (name) => {
	return `components/_${name}.ejs`;
};

module.exports = (req, res, next) => {
	/* Check End Slash */
	if (req.url.slice(req.url.length - 1) == '/') {
		return res.redirect(req.url.slice(0, req.url.length - 1));
	}
	/* Set Language */
	req.lang = req.params.language;
	/* Url */
	const url = (path = null, lang = req.lang) => {
		if (!path) {
			let route = req.url.split('/').slice(-1)[0];
			return (
				(process.env.BASE_URL || req.protocol + '://' + req.headers.host) +
				'/' +
				lang +
				(route.match(/(tr|en|ru)/) ? (route = '') : '/' + route)
			);
		}
		if (path == '/') return `/${req.lang}`;
		return `/${req.lang}/${path}`;
	};
	/* Active Url */
	const active_url = (url) => {
		let current_url = req.url.split('/').slice(-1)[0].replace(/\?.*/, '');
		if (current_url.match(/(tr|en|ru)/)) {
			current_url = '/';
		} else {
			url = url.replace(/\//gi, '');
		}
		return current_url == url ? 'active' : null;
	};
	/* Langs */
	const langs = [...(process.env.LANGS ? process.env.LANGS.split(',') : ['tr'])];
	/* Reder Site View */
	res.renderSiteView = (view, data) => {
		return res.render('main.master.ejs', {
			page: view,
			lang: req.lang,
			langs,
			document: {
				title: 'Başlık',
				description: 'Açıklama',
				keywords: 'Anahtar Kelimeler',
			},
			...data,
			comp,
			url,
			active_url,
		});
	};
	/* Push Flash */
	res.push_flash = (message, type = 'warning') => {
		if (req.session?.flush?.length >= 1) {
			req.session.flush.push({ type, message });
		}
	};
	next();
};
