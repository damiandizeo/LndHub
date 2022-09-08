let config = {
  redis: {
    port: 6379,
    host: '127.0.0.1',
    family: 4,
    db: 0,
  },
  lnd: {
    url: '127.0.0.1:10009',
  },
  network: 'testnet'
};

if (process.env.CONFIG) {
  console.log('using config from env');
  config = JSON.parse(process.env.CONFIG);
}

module.exports = config;
