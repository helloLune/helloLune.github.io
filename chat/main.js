
const ws = new WebSocket(`ws://localhost:3003`);
const send_button = document.getElementById("send_button");
const input = document.getElementById('input');
send_button.addEventListener('click',() => {
    to_send();
});



function set_status(status){
const status_holder = document.getElementById('room_status');
if(status === 'DISCONNECTED'){
    status_holder.innerHTML = 'DISCONNECTED';
    status_holder.className = 'disconnected';
}else if(status === 'CONNECTED'){
    status_holder.innerHTML = 'CONNECTED';
    status_holder.className = 'connected';
}else{
    status_holder.innerHTML = 'room status'
}

}
function to_send(){

     const name = document.getElementById('room_input');
     const input = document.getElementById('input');
    if(input.value != '' ){
       if(name.value != ''){
        ws.send(JSON.stringify({
            'message': input.value,
             'name' : name.value
        }));
       }
        //ws.send(input.value);
    }
    input.value = '';
}
ws.onopen = () => set_status('CONNECTED');
ws.onclose = () => set_status('DISCONNECTED');
let index = 0;
ws.onmessage = function(response){
    console.log(response +'\t <-полученные данные');
    let message_f = response.data;
    let name_f = '';


     JSON.parse(response.data,function(key,value){
         console.log(key +'\t' +value);
        if(key === 'name' ){
             name_f = value ;
         }
        else if(key === 'message' ){
             message_f = value ;
        }

     });
    const chat = document.getElementById('chat');
    const message_box = document.createElement('div');
    const my_message = document.createElement('div');
    const name_holder = document.createElement('div');
    message_box.className = 'message';
    name_holder.className ='name_holder';
    name_holder.innerHTML = name_f;
    my_message.className = 'notmy_message';
    my_message.id = `${index}`;
    message_box.className = 'message';
    message_box.appendChild(name_holder);
    chat.appendChild(message_box);
    message_box.appendChild(my_message);
    my_message.innerHTML = `[\t${message_f}\t]`;
   index++;
    if(index >= 4){
        chat.style.overflowY = 'scroll';
    }
};





input.addEventListener('keydown',function(event){
    if(event.code === "Enter"){
        to_send();
    }
});
