const webpack = require('webpack');
const config = require('./package.json');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackUploadPlugin = require('jdf2e-webpack-upload-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const htmlwebpackincludeassetsplugin = require('html-webpack-include-assets-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const cheerio = require('cheerio');


const webpackConfig = module.exports = {};
const isProduction = process.env.NODE_ENV === 'production';


webpackConfig.entry = {
    app: './src/app.js',
};

webpackConfig.output = {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: config.version+'/js/[name].js'
};

webpackConfig.module = {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [ 'css-loader?-minimize', 'postcss-loader']
        }),
    }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 'css-loader?-minimize', 'sass-loader', 'postcss-loader']

        })
    }, {
        test: /\.vue$/,
        use:[
            {
                loader:'vue-loader',
                options:{
                    loaders:{
                          sass:ExtractTextPlugin.extract({
                            fallback: 'vue-style-loader',
                            use:'css-loader?-minimize!sass-loader'
                        })
                    },
                    postcss: [require('autoprefixer')()]
                }
            }
        ]
    }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
    },  {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
    }, {
        test: /\.(png|jpg|gif|webp)$/,
        loader: 'url-loader',
        options: {
            limit: 3000,
            name: config.version+'/img/[name].[ext]',
        }
    }, ]
};
webpackConfig.resolve = {
    extensions: ['.vue', '.js', '.jsx']
}
webpackConfig.plugins = [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin('dist'),
    new CleanWebpackPlugin('html'),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: path.resolve(__dirname, 'dist/index.html'),
    }),
    new ExtractTextPlugin({
        filename: config.version+'/css/app.css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css\.*(?!.*map)$/g,
      cssProcessorOptions: { 
        discardComments:{removeAll:true},
        safe: true,
        autoprefixer:false,
      },
     
    }),
    new CopyWebpackPlugin([
        { from: path.join(__dirname, "./static/"), to: path.join(__dirname, "./dist/lib") }
    ]),
    new webpack.DllReferencePlugin({
        context:__dirname,
        manifest:require('./vendor-manifest.json')
    })
];

if (isProduction) {

    webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new UglifyJsPlugin({
            cache:true,
            sourceMap:false,
            parallel:4,
            uglifyOptions: {
                ecma:8,
                warnings:false,
                compress:{
                    drop_console:true,
                },
                output:{
                    comments:false,
                    beautify:false,
                }
            }
            
        }),
        new htmlwebpackincludeassetsplugin({
            assets:['lib/vendor.dll.js'],
            publicPath:'/',
            append:false
            
        }),
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: [ '/appcampus'],
            postProcess(renderedRoute){
                const $ = cheerio.load(renderedRoute.html);
                $('html').removeAttr('style');
                let cssHref = $('link').attr('href');
                $('link').attr('href',config.publicPath+cssHref);

                //script
                let scriptStr = '';
                $('script','body').map(function(i,el){
                    let src = $(this).attr('src');
                    if( src &&src.indexOf('//') == -1){
                        $(this).attr('src',config.publicPath+ src);
                        
                    }
                    scriptStr += $(this).clone();
                })
                let appContent =  $('#app').clone();

                let body = $('body');
                body.empty();
                $(appContent).appendTo(body);
                $(scriptStr).appendTo(body);
                renderedRoute.html = $.html();
                return renderedRoute;
            },
            outputDir:path.join(__dirname,'html'),
            renderer: new Renderer({
             
              inject: {
                foo: 'bar'
              },
              renderAfterDocumentEvent: 'render-event',
    
            })
          })
    ]);
   
} 
