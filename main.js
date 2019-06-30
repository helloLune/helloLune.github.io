
//vars and constances
const trade = new WebSocket('wss://ws.coincap.io/trades/binance');
let coin = [];
let coin_value = [];
let n = 0;






//functions
function check_in_pool(value){
	if(coin.indexOf( value ) != -1){
		return true; //означает что value есть в  массиве
	}else{return false;} //означает что value нет в массиве}
}
function create_h1(value){
	let ground = document.getElementById('app');
	let list_item = document.createElement('div');
	let price_holder = document.createElement('div');
	let holder_all = document.createElement('div');

	holder_all.appendChild(list_item);
	holder_all.appendChild(price_holder);
	ground.appendChild(holder_all);

	list_item.className = "list_item";
	list_item.innerHTML = value;  //под value подразумевается имя криптовалюты
	price_holder.className = "price_holder"
	price_holder.innerHTML = 10;
	holder_all.className = "holder_for_list_item";
}
function is_base(key){
	if(key === 'base'){
		return true;
	}
	else{return false;}
}
function set_price(index_num){
	JSON.parse(this.str,function(key,value){
		if(key === 'price'){
			coin_value[index_num] = value;
			return;
		}
	})
}
function add_to_massive_name(){
	
}
function access(){
	if(access_num === 15){
		return false;

	}
	else{
		return true;
	}
}


//trigers
trade.onmessage = function(msg){
	let change = false;
	var str = msg.data;
		
JSON.parse(str,function(key, value){
	 	
	 	if(is_base(key) && check_in_pool(value) === false){
	 		coin[n] = value;
	 		create_h1(value);
	 		n++;
	 		console.log(" %c to massive of coins was added \t" +value +" with index \t[" +n +"]..." ,'background: orange');
	 	}
	 })

	 	 
	 	

		
		
		
}
	

