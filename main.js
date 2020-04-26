let __c = (s,o) =>
{
	/*
		функция шифрации по смещению
		@param s = String
		@param o = String/Int
	*/	
	let _ = []
	if(typeof(o) == 'string') o = __s(o)
	for(let __ of s)_.push(__.charCodeAt()+(o || 0))
	return _
}
let __s = s =>
{
	/*
		функция возврата суммы строки
		@param s = String
	*/
	let _t = 0
	for(let __t of s) _t+=__t.charCodeAt()
	return _t
}
let __ec = (a,o) =>
{
	/*
		функция дешифрации по смещению
		@param a = Array
		@param o = String/Int
	*/
	let _ = ''
	if(typeof(o) == 'string') o = __s(o)
	for(let __ of a) _ += String.fromCharCode(__-(o || 0))
	return _
}
