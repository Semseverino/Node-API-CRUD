require('dotenv').config();

module.exports = { 
    environment: process.env.NODE_ENV,
    nam: process.env.NAME,
    bex: {
        host: process.env.API_BEXS_ROUTES_MERCHANTS,
        resource: process.env.API_MERCHANT_RESOURCE,
    }
}