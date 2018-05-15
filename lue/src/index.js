const aryMethods = ['push', 'pop', 'splice']
const aryNew = []

aryMethods.forEach((method) => {
  let old = Array.prototype[method]
  aryNew[method] = function() {
    console.log('改变了')
    return old.apply(this, arguments)
  }
})

let ary = [1, 2, 3, 4, 5]
ary.__proto__ = aryNew
ary.push(6)
console.log(ary)