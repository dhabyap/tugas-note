const routes = require('./routes');
const Hapi = require('@hapi/hapi');

const init = async () => {
    const port = process.env.PORT ? Number(process.env.PORT) : 5000;
    const host = process.env.HOST || '0.0.0.0';

    const server = Hapi.server({
        port,
        host,
        routes: {
            cors: {
                origin: ['*'],
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();