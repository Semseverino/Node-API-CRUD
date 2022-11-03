import swaggerAutogen from 'swagger-autogen'

const outputFile = './swagger-output.json'
const endpointsFile = import('./routes/users.js')

    swaggerAutogen()(outputFile, endpointsFile).then(async () => {
        await import('./index.js')
    })