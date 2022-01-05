Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'sw5e-german-translation',
			lang: 'de',
			dir: 'de'
		});
	}
});