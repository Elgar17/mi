module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                // target: 'https://bing.biturl.top/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    } 
}