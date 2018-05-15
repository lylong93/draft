let data = {
  user:'li',
  age:'25'
}

function Observe(data) {
    this.data = data;
    this.walk(data)
}
Observe.prototype.walk= function(obj) {
  let val;
  for(let key in obj) {
    val = obj[key]
    console.log(val)
    this.convert(obj,key)
  }
}
Observe.prototype.convert = function(obj,key) {
  Object.defineProperty(this.data, key,{
    enumerable:true,
    configurable:true,
    get() {
      console.log('get')
    },
    set() {
      console.log('set')
    }
  })
}

var o = new Observe(data)
