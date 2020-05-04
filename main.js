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

	class Dote{
		constructor()
		{
			this.__rSet()
			this.text = _k.pop()
		}
		__update = (_)=>
		{
			if(_prp.loop) this.__offset()
			this.__draw(_)
		}
		__offset()
		{
			if(__md) return
			this.x += Math.random()*_prp.vel
			this.y += Math.random()*_prp.vel
			if((0  >= this.x || this.x >= _w) || (0  >= this.y || this.y >= _h)) this.__rSet() 
		}
		__rSet()
		{	
			this.x = Math.random()*_w
			this.y = Math.random()*_h
		}
		__draw(_)
		{
			_ = _ || 0.8
			_ct.beginPath()
			_ct.arc(this.x,this.y,_prp.r,0,360)
			_ct.font = _prp.r*6 +'px Consolas'
			_ct.fillText(this.text,this.x-4*_prp.r,this.y-2*_prp.r)
			_ct.closePath()
			_ct.fillStyle = _prp.clr+(_+0.44)+')'
			_ct.stroke()
		}
	}
	let __clr = ()=>
	{
		_ct.clearRect(0,0,_w,_h)
	}
	let __cL = (_1,_2,_o) =>
	{
		if(_1.text == _2.text) return
		if(_o <= _prp.mlngth && _o){
			_ct.beginPath()
			_ct.lineCap = 'round'
			_ct.lineWidth = _prp.r/4
			_ct.lineJoin = "round"
			_ct.strokeStyle = _prp.clr + Math.abs(Math.sin(_o+1e2)) +')'
			_ct.moveTo(_1.x,_1.y)
			_ct.lineTo(_2.x,_2.y)
			_ct.stroke()
		}
		_2.__update(_o);

	}
	let __int = () =>
	{	//init
		for(let _ of Array(_prp.dts).keys()) _dl.push(new Dote())
	}
	let __res = () =>
	{	//restore
		__clr()
		_h = _cv.height = innerHeight
		_w = _cv.width = innerWidth
		_prp.mlngth = _w/8
	}
	let __upd = () => 
	{	//update
		__clr()
		for(let _ of _dl){ 
			for(let __ of _dl){
				let ___ = __gD(_,__)
				__cL(_,__,___)
			}
			_.__update()
		}
		requestAnimationFrame(__upd)
	}
	let __ab = _m =>
	{
		let _s = []
		for(let _ of _m) _s.push(Math.abs(_))
		return _s
	}
	let __gD = (_1,_2)=>
	{
		return Math.sqrt((_2.x-_1.x)**2+(_2.y-_1.y)**2)
	}
	let
		_prp = {
			r: 1, //radius
			wl: 1, //wave length
			dts: 100, //dotes
			mlngth: 0, //min space length for create line
			clr: 'rgba(255,'+__r(0,255)+','+__r(0,80)+',',
			loop: true,
			vel: 1/10
		},
		_k=[], //keys
		_h, //heigth
		_w, //width
		_dl = [], //dote list
		__md = false,
		__l = console.log,
		_cv = document.createElement('canvas'), //canvas
		_ct = _cv.getContext('2d');//context
		for(let _ of Array(_prp.dts/2).keys()) _k.push('+','-')
	document.body.appendChild(_cv)
	window.onresize = __res
	__res()
	__int()
	requestAnimationFrame(__upd)
	/*
	
		mouse events

	*/
	onmousedown = ()=>
	{__md=true}
	onmouseup = ()=>
	{__md=false}

}
eWeb()