const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output bundle file
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply the loader to all .js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' // Use Babel for transpiling ES6+ code
                }
            }
        ]
    },
    devtool: 'source-map', // Generate source maps for easier debugging
    mode: 'production' // Set the mode to production or development
};
