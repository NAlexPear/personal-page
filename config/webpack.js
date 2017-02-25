var path = require( "path" );

process.noDeprecation = true;

module.exports = {
    "output": {
        "filename": "main.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.js[x]$/,
                "exclude": /(node_modules|bower_components)/,
                "loader": "babel-loader",
                "options": {
                    "presets": [ "es2015" ],
                    "plugins": [ "inferno" ]
                }
            }
        ]
    },
    "resolve": {
        "alias": {
            "gsap": path.resolve( __dirname, "../node_modules/gsap" )
        }
    },
    "devServer": {
        "contentBase": path.resolve( __dirname, "../public" ),
        "publicPath": "/theme/js/",
        "port": 9000,
        "compress": true
    },
    "devtool": "source-map"
};
