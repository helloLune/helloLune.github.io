}
let __ec = (a,o) =>
{
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
	let __rXY = mx =>
	{
		let _ = __r(0,mx)
		return __r(0,1) ? _ : _*(-1)
	}
	class Dote{
		constructor()
		{
			this.__rSet()
			this.text = this.__getText()
		}
		__update = (_)=>
		{
			this.__offset()
			this.__draw(_)
		}
		__offset()
		{
			if(__md) return
			this.x += __rXY(_prp.wl)*_prp.vel
			this.y += __rXY(_prp.wl)*_prp.vel
			if((0  >= this.x || this.x >= _w-_prp.pdg) || (0  >= this.y || this.y >= _h-_prp.pdg)) this.__rSet() 
		}
		__getText()
		{
			let _s = ['-','+']
			return _s[Math.floor(__r(0,_s.length-1))]
		}
		__rSet()
		{
			this.x = __r(_prp.pdg,_w-_prp.pdg)
			this.y = __r(_prp.pdg,_h-_prp.pdg)
		}
		__draw(_)
		{
			_ = _ || 0.8
			_ct.beginPath()
			_ct.arc(this.x,this.y,_prp.r,0,360)
			_ct.fillText(this.text,this.x-4*_prp.r,this.y-2*_prp.r)
			_ct.closePath()
			_ct.fillStyle = _prp.clr+_+')'
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
		if(_o <= _prp.mlngth){
			_ct.beginPath()
			_ct.lineCap = 'round'
			_ct.lineWidth = _prp.r/4
			_ct.lineJoin = "round"
			_ct.strokeStyle = _prp.clr + Math.abs(Math.sin(_o+1e2)) +')'
			_ct.moveTo(_1.x,_1.y)
			_ct.lineTo(_2.x,_2.y)
			_ct.stroke()
			if(_prp.loop){
				_1.__update(_o);
				_2.__update(_o);
			}
		}

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
		__int()
	}
	let __upd = () => 
	{	//update
		__clr()
		for(let _ of _dl){ 
			for(let __ of _dl){
				let ___ = __gD(_,__)
				__cL(_,__,___)
			}
			if(_prp.loop) _.__update()
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
	{	let _tX = __ab([_1.x,_2.x].sort())
		let _tY = __ab([_1.y,_2.y].sort())
		return Math.sqrt((_tX[1]-_tX[0])+(_tY[1]-_tY[0])) | 0
	}
	let
		_prp = {
			r: 2, //radius
			wl: 1, //wave length
			dts: 150, //dotes
			pdg: 120, //padding 
			mlngth: 7, //min space length for create line
			clr: 'rgba(255,'+__r(0,255)+','+__r(0,80)+',',
			loop: true,
			vel: 1/12
		},
		_h, //heigth
		_w, //width
		_dl = [], //dote list
		__md = false,
		__l = console.log,
		_cv = document.createElement('canvas'), //canvas
		_ct = _cv.getContext('2d');//context
		_ct.font = _prp.r+' px Arial'
	document.body.appendChild(_cv)
	window.onresize = __res
	__res()
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