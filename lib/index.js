module.exports = function(config, io){
    var socketConfig = config['sails-socketadapter-redis'];

    // the Redis adapter relies on the Redis store
    var RedisStore		= require('socket.io/lib/stores/redis'),
    Redis			= require('socket.io/node_modules/redis');
    
    var host = socketConfig.host || '127.0.0.1';
    var port = socketConfig.port || 6379;
  
	/**
	 * Creates a new Redis Connection if specified.
	 *
	 * Can be used to connect to remote server with authentication if
	 * `pass` is declared in the socketConfig file.
	 */

    var createRedisConnection = function(port, host)
    {
	var socketConfig = sails.config.sockets;
	
	// Create a new client using the port, host and other options
	var client = Redis.createClient(port, host, socketConfig);
	
	// If a password is needed use client.auth to set it
	if(socketConfig.pass) {
	    client.auth(socketConfig.pass, function(err) {
		if (err) throw err;
	    });
	}
	
	// If a db is set select it on the client
	if (socketConfig.db) {
	    client.select(socketConfig.db);
	}
	
	return client;
    };
    
    var pub = createRedisConnection(port, host);
    var sub = createRedisConnection(port, host);
    var client = createRedisConnection(port, host);
    
    var storeConfig = {
	redisPub: pub,
	redisSub: sub,
	redisClient: client
    };
    
    // Add a pointer to the redis, required with Auth
    if(socketConfig.pass) {
	storeConfig.redis = Redis;
    }
    
    io.set('store', new RedisStore(storeConfig));
};