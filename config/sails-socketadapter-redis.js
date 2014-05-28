/**
 * Default configuration file for the Sails Redis socket.io adapter. If using the Redis adapter this file should be copied into the Sails project's config directory.
 *
 */
module.exports = {
    'sails-socketadapter-redis': {
	// OPTIONAL
	// The Redis server host. If not specified, a connection will be made to localhost.
	// host: '127.0.0.1'
	
	// OPTIONAL
	// The Redis server port. If not specified, a connection will be made to port 6379 on the Redis server host.
	// , port: 6379
	
	// OPTIONAL
	// The Redis db to be connected to. If not specified, the default db in the Redis server configuration will be used.
	// , db: 'sails'
	
	// OPTIONAL
	// The Redis connection authentication password. If not specified no connection authentication will be performed.
	// , pass: '<redis auth password>'
    }
};