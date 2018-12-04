LndHub
======

INSTALLATION
------------

```
git clone git@github.com:BlueWallet/LndHub.git
cd LndHub
npm i
```

Install `bitcoind`, `lnd` and `redis`.

Edit `config.js` and set it up correctly.
Copy `admin.macaroon` and `tls.cert` in root folder of LndHub.

### Deploy to Heroku

Add config vars :
* `CONFIG` : json serialized config object
* `MACAROON`: hex-encoded `admin.macaroon`
* `TLSCERT`: hex-encoded `tls.cert`