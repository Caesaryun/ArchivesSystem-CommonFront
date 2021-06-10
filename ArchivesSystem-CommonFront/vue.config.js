module.exports = {
   
    // baseUrl: './',
    productionSourceMap: false,
    devServer: {
        port:9999,   //为大众打造的前台公共页面
        open:true,
        hotOnly:true
        // proxy: {
        //     '/api':{
        //         target:'http://jsonplaceholder.typicode.com',
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '/api':''
        //         }
        //     },
        //     '/ms':{
        //         target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
        //         changeOrigin: true
        //     }
        // }
    }
}