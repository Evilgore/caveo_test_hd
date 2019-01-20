
// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '^/rest/search': {
                target: 'https://cloudplatform.coveo.com',
                headers: {
                    Authorization: 'Bearer 058c85fd-3c79-42a3-9236-b83d35588103'
                }
            }
        }
    }
}