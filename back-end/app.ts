import Server from './app/server/server'
import RouterManager from './app/controller/routes/routes-manager';
import ConfigDB from './app/config/config-db';

ConfigDB.getInstance();

const server = Server.init(3000);

server.start();
server.app.use(RouterManager);