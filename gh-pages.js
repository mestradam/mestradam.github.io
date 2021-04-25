var ghpages = require ('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/mestradam/mestradam.github.io.git,
		user: {
			name: 'Martin Estrada',
			email: 'mestradam@unal.edu.co'
		}
	},
	() => {
		console.log('Deploy Complete!')
	}
)
