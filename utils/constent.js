const env = process.env.NODE_ENV
module.exports = {
    api: env == "development" ? 'http://localhost:1200' : 'https://orp.trc.gov.om/awards-app',
    basePath: env == "development" ? '' : '/awards'
}