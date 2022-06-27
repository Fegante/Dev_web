import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import server from './server';
import * as fs from 'fs';
import * as http from 'http'
import * as https from 'https'

const credentials = {
    key: fs.readFileSync("../key.pem"),
    cert: fs.readFileSync("../cert.pem")
}

const httpServer = http.createServer(server);
const httpsServer = https.createServer(credentials, server);

// Constants
const serverStartMsg = 'Express server started on port: ',
port = (process.env.PORT || 3000);

// Start server
httpServer.listen(80, () => {
    logger.info(serverStartMsg + 80);
});


httpsServer.listen(443, () => {
    logger.info(serverStartMsg + 443);
});
