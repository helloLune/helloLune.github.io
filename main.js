//entry point
let wave = ()=>{
	class Dote{
		constructor(x,y,num){
			this.x = x
			this.y = y
			this.num = num
			this.scale = __gD(x,y)/_prp.wl
			this.draw()
		}
		update(){
			this.resize()
			this.draw()
		}
		resize(){
			this.scale = this.scale - _prp.vel
		}
		draw(){
			let _r = _prp.r * (1-Math.abs(Math.sin(this.scale)))
			_ct.beginPath()
			_ct.arc(this.x,this.y,_r,0,360)
			_ct.closePath()
			_ct.fillStyle = 'rgba(255,90,0' +Math.abs(Math.sin(this.scale))+')'
			_ct.fill()
			//_ct.fillText('x',this.x,this.y)
		}
	}
	let __gD = (x,y) =>
	{
		let dx = _w/2 - x
		let dy = _h/2 - y
		return Math.sqrt((dx*dx)+(dy*dy))
	}
	let __int = () =>
	{	//init
		let _strX = (_prp.d + _w - _cX*_prp.d)/2
		let _strY = (_prp.d + _h - _cY*_prp.d)/2
		for(let _ of Array(_cY).keys()){
			let _y = _strY + _*_prp.d
			for(let __ of Array(_cX).keys()){ 
				let _x = _strX + __*_prp.d
				_dl.push(new Dote(_x,_y,__+_ | 1))
			}
		}
	}
	let __res = () =>
	{	//restore
		_ct.clearRect(0,0,_w,_h)
		_h = _cv.height = innerHeight
		_w = _cv.width = innerWidth
		_cX = Math.floor(_w/_prp.d)
		_cY = Math.floor(_h/_prp.d)
		__int()
	}
	let __upd = () => 
	{	
		_ct.clearRect(0,0,_w,_h)
		for(let _ of _dl) _.update()
		requestAnimationFrame(__upd)
	}
	let
		_prp = {
			r: 5, //radius
			d: 10, //diameter
			wl: 50, //wave length
			vel: .2 //velocity
		},
		_h, //heigth
		_w, //width
		_dl = [], //dote list
		_cX, //x count
		_cY, //y count
		_cv = document.createElement('canvas'), //canvas
		_ct = _cv.getContext('2d');//context
	document.body.appendChild(_cv)
	window.onresize = __res
	__res()
	requestAnimationFrame(__upd)
}
/*

	canvas web


*/
let eWeb = ()=>
{	
	let __r = (mn, mx)=> 
	{
	  	let _r = mn + Math.random() * (mx + 1 - mn);
	  	return _r;
	}
	let __re = arr=> 
	{
	    let rand = Math.floor(Math.random() * arr.length);
	    return arr[rand];
	}
	class Dote{
		constructor(e)
		{	e = e || 0
			this.__rSet(e)
			this.text = __re(['+','-'])
		}
		__update = (_)=>
		{
			if(!__md) this.__offset()
			this.__draw(_)
		}
		__offset()
		{
			if(__md) return
			this.x += Math.random()
			this.y += Math.random()
			if(0  >= this.x || this.x >= _w || 0  >= this.y || this.y >= _h) this.__rSet() 
		}
		__rSet(e)
		{	
			this.x = e ? e.x : Math.random()*_w
			this.y = e ? e.y : Math.random()*_h
		}
		__draw(_)
		{
			_ = _ || 1
			_ct.beginPath()
			_ct.fillStyle = _ct.strokeStyle = _prp.clr+Math.abs(
				Math.sin(_)
			)+')'
			_ct.arc(this.x,this.y,_prp.r,0,360)
			_ct.fillText(this.text,this.x-4*_prp.r,this.y-2*_prp.r)
			_ct.stroke()
			_ct.closePath()
		}
	}
	let __cL = (_1,_2,_o) =>
	{	
		if(_1.text == _2.text) return
		if(_o <= _prp.mlngth && _o){
			_ct.beginPath()
			_ct.lineCap = 'round'
			_ct.lineWidth = _prp.r/4
			_ct.lineJoin = "round"
			_o = __gtO(_o)
			_ct.strokeStyle = _prp.clr + _o+')'//((__o < 0.5) ? (__o+')') : (Math.abs(Math.sin(_o/2))+')'))
			_ct.moveTo(_1.x,_1.y)
			_ct.lineTo(_2.x,_2.y)
			_ct.stroke()
		}
	}
	let __int = () =>
	{	//init
		__res()
		__stRclr()
		for(let _ of Array(_prp.dts).keys()) _dl.push(new Dote())
	}
	let __res = () =>
	{	//restore
		_h = _cv.height = innerHeight
		_w = _cv.width = innerWidth
		_prp.mlngth = _h/9
		_prp.r = _h/170
		_ct.font = `${_prp.r*2}px Arial`
	}
	let __aClr = () =>
	{
		__clr()
		_dl = []
		__int()
	}
	let __stRclr = ()=>
	{
		_prp.clr = 'rgba(255,'+__r(0,255)+','+__r(0,255)+',' 
	}
	let __as = _ =>
	{
		return Math.abs(Math.sin(_))
	}
	let __gtO = _ =>
	{
		return  (_ ? 
					(Math.abs(
						Math.sin(
							(__as(_/7e2)+__gtO())/2
						)
					)) 
					: 
					Math.abs(
						Math.cos(
							new Date().getTime()/5e3 
						)
					)
				)
	}
	let __upd = () => 
	{	//update
		__clr()
		if(0.01>__gtO()) __stRclr();
		for(let _ of _dl){ 
			for(let __ of _dl){
				let ___ = __gD(_,__)
				__cL(_,__,___)
			}
			_.__update()
		}
		requestAnimationFrame(__upd)
	}
	let __gD = (_1,_2)=>
	{
		return Math.sqrt((_2.x-_1.x)**2+(_2.y-_1.y)**2)
	}
	let
		_prp = {
			r: 0, //radius
			dts: 90, //dotes
			mlngth: 0, //min space length for create line
			clr: '', //color
		},
		_h, //heigth
		_w, //width
		_dl = [], //dote list
		__md = false, //pause
		_cv = document.createElement('canvas'), //canvas
		_ct = _cv.getContext('2d'),//context
		__clr = ()=>{_ct.clearRect(0,0,_w,_h)};
	_ct.innerHTML = 'Если не грузится, значит браузер не поддерживается...'
	document.body.appendChild(_cv)
	window.onresize = __res
	__int()
	requestAnimationFrame(__upd)
	/*
		events
	*/
	let __crtD = (e) =>
	{
		!(_dl.length > 350)&&_prp.mlngth ? _dl.push(new Dote(e)) : __aClr()
		return _prp.mlngth -= 0.2	
	}
	onclick = e =>
	{
		__crtD(e)
	}
	onkeydown = e => 
	{
		if(e.keyCode == 189) //minus | delete dote 
		{ 
			_dl.length-1 ? _dl.pop() : __aClr()
			return _prp.mlngth += 2
			
		}
		if(e.keyCode == 187) //plus | new dote
		{ 
			return __crtD()
		} 
		if(e.keyCode == 32) //space | stop
		{ 
			return __md=!__md
		} 
	}	

}
eWeb()