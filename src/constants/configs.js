export const getConfigs = () => {
    if(process.env.NODE_ENV == 'development'){
        return {
            APP_VERSION : 'v1',
            SERVER_ENDPOINT : 'http://localhost:7000/',
            DOMAIN : 'localhost',
        };
    } else if(process.env.NODE_ENV == 'production'){
        return {
            APP_VERSION : 'v1',
            SERVER_ENDPOINT : 'https://localhost:7000/',
            DOMAIN : 'localhost',
        };
    } else if(process.env.NODE_ENV == 'test'){
        return {
            APP_VERSION : 'v1',
            SERVER_ENDPOINT : 'http://localhost:7000/',
            DOMAIN : 'localhost',
        };
    }
}