const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const public_path = path.join(__dirname,'chat');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;
let log;
let index_message = 0;


app.use(express.static(public_path));

io.on('connect',() => {
  const now = new Date();
	console.log(index_message+' connection \n_____\n session start time \t|' +now +'|');
	log += index_message+' connection \n_____\n session start time \t|' +now +'|';
	console.log('logged');
  index_message++;
});



server.listen(port,() =>{
    console.log(`server started on port ${port}`);
});
