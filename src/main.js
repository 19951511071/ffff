const div = dom.create("<div></div>");
const aa = document.getElementById("scope")
// dom.after(aa, div);
// dom.before(aa,div);
// dom.append(aa,div);
// dom.wrap(aa,div)
// dom.remove(aa)
// dom.empty(empty)
dom.attr(aa,'name',"frank")  //注意：属性名时字符串‘
dom.attr(aa, 'title', 'Hi, I am Frank')
const title = dom.attr(aa, 'title')
console.log(`title: ${title}`)
console.log(dom.text(aa,'你好，我是方方'))
console.log(dom.text(aa))
console.log(dom.html(aa,'<p>hello</p>'))
console.log(dom.html(aa))
dom.style(aa,'border' ,'1px solid #ccc')
console.log(dom.style(aa,'border'))
dom.class.add(aa,'ccc')
dom.class.remove(aa,'ccc')  
const fn = ()=>{
    console.log('哈哈')
}
console.log(dom.on(empty,'click', fn))
dom.off(empty,'click',fn)
const sa= dom.find("#one")[0]
const sa1 = dom.find('#two')[0]
const cc = dom.find("#empty")[0]
console.log(sa)
console.log(dom.parent(sa))
console.log(dom.children(empty))
console.log(dom.sibling(sa))
console.log(dom.next(sa))
console.log(dom.previous(sa1))
console.log(cc)
dom.each(dom.children(cc),(n)=>{
   dom.style(n,'border','1px solid #ccc')
})
console.log(dom.index(sa1))
const box = dom.find('#test>.red')[0]
console.log(box)
dom.style(box, 'color', 'red') // 设置 div.style.color
const divList = dom.find('.red') // 获取多个 div.red 元素
console.log(divList)
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素