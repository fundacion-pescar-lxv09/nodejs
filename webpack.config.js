import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
// Declaraciones
const dir = process.cwd();
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';
const config = {
    // Configuracion del compilador
    entry: './index.js', // Archivo de Entrada (Principal)
    output: { path: dir+'/dist' }, // Carpeta de salida
    // Compatibilidad con Modulos Built-In
    target: 'node', // Aplicacion NodeJS
    externals: [nodeExternals()], // Permite importacion al compilar
    // Servidor para Desarrollo
    devServer: {
        static: { directory: dir+'/dist' }, // Directorio de Salida
        open: true, // Apertura automatica
        host: 'localhost', // Nombre de Dominio
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: dir+'/public/index.html', // Archivo para Vista
        }),
    ],
    module: {
        // Reglas de Compilacion
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader', // Traduccion a VanillaJS
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'], // Interprete CSS
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'], // Compilador SASS
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset', // Identificador de Recursos
            },
        ],
    },
};

export default () => {
    if (isProduction) {
        config.mode = 'production'; // Entorno de Produccion
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW()); // Genera la configuracion para Aplicacion web Progresiva
    } else {
        config.mode = 'development'; // Entorno de Desarrollo
    }
    return config;
};
