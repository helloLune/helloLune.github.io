/*	  __________
	 |шифрование|
 ____/          \_____
|                     |
*/

let __c = (s,o) =>
{
	/*
		`шифрование по смещению`
		@param s = String
		@param o = String/Int
		return Array(Int)
	*/	
	let _ = []
	if(typeof(o) == 'string') o = __s(o)
	for(let __ of s)_.push(__.charCodeAt()+(o || 0))
	return _
}
let __s = s =>
{
	/*
		`смещение по строке`
		@param s = String
		return Int
	*/
	let _t = 0
	for(let __t of s) _t+=__t.charCodeAt()
	return _t
}
let __ec = (a,o) =>
{
	/*
		`дешифрация по смещению`
		@param a = Array(Int)
		@param o = String/Int
		return String
	*/
	let _ = ''
	if(typeof(o) == 'string') o = __s(o)
	for(let __ of a) _ += String.fromCharCode(__-(o || 0))
	return _
}


/*	  __________
	 |нейросетки|
 ____/          \_____
|                     |
*/

let l = console.log



let __w = a =>
{
	/*
		`вес массива`
		@param a = Array(Int)
		return Int
	*/
	if(typeof(a)=="number") return a
	let _ = 0
	if(!a.length) return 0
	for(let __ of a) _ += __
	return _/a.length
}
let __f = x =>
{
	/*
		`функция активации`
		@param x = Int/float
		return float
	*/
	return 1/(1+Math.exp(x))
}
let __n = (A,a) =>
{
	/*
		`нейросеть по принципу Перцептрона`
		@param A = Array(Array(Int)) `Array | первичная таблица`
		@param a = Int `accuracy | точность`
		return Int
	*/
	let _ = 0
	let __t = []
	for(let ___ of A) __t.push(__w(___))
	__t = __w(__t)
	for(let __ of Array(a).keys()){
		_ = __f(__)
	}
	return _
}

let __m = (__l,_l,r)=>
{
	/*
		`Функция создания обучающих данных`
		@param __l = Int `Длина массива обучающих данных`
		@param _l = Int `Длина массива вложенного`
		@param r = Int/float `диапозон рандомных чисел от 0 до r`
		return Array(Array(Int))
	*/
	let _ = []
	let __r = (mn, mx)=> {
	  	let _r = mn + Math.random() * (mx + 1 - mn);
	  	return Math.floor(_r);
	}
	for(let __ of Array(__l).keys()){
		let __t = []
		for(let ___ of Array(_l).keys())__t.push(__r(0,r))
		_.push(__t)
	}
	_[_.length-1].pop()
	return _
}