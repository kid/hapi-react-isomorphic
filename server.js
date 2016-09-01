import { Server } from 'hapi';
import Inert from 'inert';
import Vision from 'vision';
import HapiReactViews from 'hapi-react-views';
import { join } from 'path';
// import WebpackPlugin from './lib/hotplugin';
import WebpackPlugin from 'hapi-webpack-plugin';

const server = new Server();

server.connection({
  port: 8000,
});

server
  .register([Inert, Vision, { register: WebpackPlugin, options: './webpack.config.js' }])
  .then(() => {
    server.views({
      engines: {
        jsx: HapiReactViews,
      },
      relativeTo: __dirname,
      path: 'components',
      compileOptions: {
        renderMethod: 'renderToString',
        layoutPath: join(__dirname, 'components'),
        layout: 'Layout',
      },
    });

    // server.route({
    //   method: 'GET',
    //   path: '/dist/{param*}',
    //   handler: {
    //     directory: {
    //       path: 'dist',
    //     },
    //   },
    // });

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: (request, reply) => reply.view('App', { scripts: ['bundle.js'] }),
    });

    return server.start();
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log(`Server started at: ${server.info.uri}`);
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });
