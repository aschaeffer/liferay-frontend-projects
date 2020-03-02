module.exports = {
	'*': {
		plugins: ['test-0', 'bundler-plugins/dir/plugin-0'],
		'post-plugins': ['test-1', 'bundler-plugins/dir/plugin-1'],
		'.babelrc': {
			plugins: [
				'test-0',
				'babel-plugins/dir/plugin-0',
				'babel-plugins/dir/plugin-1',
			],
		},
	},
	rules: [
		{
			test: '',
			use: [
				'loader-0',
				'bundler-plugins/dir/loader-0',
				'bundler-plugins/dir/loader-1',
			],
		},
	],
};
