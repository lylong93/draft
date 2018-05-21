
function Lue(obj) {
	this.data = obj
	this.define(obj)
}


let pro = Lue.prototype;


const Dep = {
	target : null
}


pro.define = function(obj) {
	console.log(obj)
	for(let key in obj) {
		this.observe(obj,key,obj[key])
	}

}
pro.observe = function(obj,key ,val) {
const deps = []
Object.defineProperty(obj,key,{
	enumerable:true,
	configurable:true,
	get() {
		console.log('get')
		deps.push(Dep.target)
		console.log(deps)
		return val
	},
	set(newval) {
		console.log('set')
		val = newval
		// console.log(deps)
		deps.forEach((dep)=> {
			dep()
		})
	}
}) 
}


pro.watcher= function(key,cb) {
const onDep = () => {
	const val =cb()
	console.log(val)
}
Object.defineProperty(this.data,key,{
	enumberable:true,
	configurable:true,
	get() {
		Dep.target = onDep
		const val = cb()
		Dep.target = null
		return val
	},
	set() {
		console.error('无法赋值')
	}	
})
}



let hero = {
	health:100,
	iq:80,
}

const nuoke = new Lue(hero)	
nuoke.watcher('type',()=> {
	return hero.health>200?'坦克':'脆皮'
})
