const Websocket = require('ws');
const server = new Websocket.Server({port: 3003});
server.on('connection', ws => {
    ws.on('message', message => {
        server.clients.forEach(client => {
            if(client.readyState === Websocket.OPEN){
                client.send(message);
                console.log(message);
            }
        })
    })
});
