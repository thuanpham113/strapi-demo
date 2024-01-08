module.exports = () => ({
	graphql: {
		enabled: true,
		config: {
			endpoint: '/graphql',
			shadowCRUD: true,
			playgroundAlways: true,
			depthLimit: 7,
			amountLimit: 100,
			apolloServer: {
				tracing: false,
				introspection: true
			},
		},
	},
	upload: {
		config: {
			provider: 'local'
		},
	},
});