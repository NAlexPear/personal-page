var path = require( "path" );

module.exports = {
    "output": {
        "filename": "main.js"
    },
    "module": {
        "loaders": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "loader": "babel-loader"
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
        "port": 9000
    }
};
