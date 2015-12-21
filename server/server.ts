/**
 * Webpack Development Server
 */

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('../webpack.config.js');
let compiler = webpack(config);

let server = new WebpackDevServer(compiler, {
    contentBase: './',
    publicPath: '/build/',
    filename: 'bundle.js',
    stats: {
        colors: true
    }
});

server.listen(3000, '0.0.0.0', function() {
    console.log('WebPack is building...');
});


/**
 * Loopback REST Server
 */
let loopback = require('loopback');
let boot = require('loopback-boot');

let app = module.exports = loopback();

app.start = function() {

    // start the web server
    return app.listen(() => {

        app.emit('started');

        let baseUrl = app.get('url').replace(/\/$/, '');

        console.log('Web server listening at: %s', baseUrl);

        if (app.get('loopback-component-explorer')) {
            let explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, (err) => {

    if (err) {
        throw err;
    }

    if (require.main === module) {
        app.io = require('socket.io')(app.start());
        require('socketio-auth')(app.io, {
            authenticate: (value, callback) => {
                let AccessToken = app.models.AccessToken;
                let token = AccessToken.find({
                    where: { and: [{ userId: value.userId }, { id: value.id }] }
                }, (err, tokenDetail) => {
                    if (err) {
                        throw err;
                    }

                    if (tokenDetail.length) {
                        callback(null, true);
                    } else {
                        callback(null, false);
                    }
                });

                console.log('Token ', token);
            }
        });

        app.io.on('connection', (socket) => {
            console.log('a user connected');

            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });
    }
});
