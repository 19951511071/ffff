window.dom ={
    // create (string) {
    //     const container = document.creatElement('template')
    //     container.innerHTML = string.trim();//trim是指创建元素写入空格时无视空格
    //     return container.content.firstChild()
    // },
    
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
      },
    // after(node,node2){
    //     node.parentNode.insertBefore(node2,node.next)
    // },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node,node2){
        node.parentNode.insertBefore(node2,node)
    },
    append(parent,node){
        parent.appendChild(node)
    },
    //先把node放在前面，再让parent把node包起来
    wrap(node,parent){
        dom.before(node,parent)
        dom.append(parent,node)
    },
    remove(node){
        return node.parentNode.removeChild(node)
    },
    empty(node){
        let arry = []
        let x =node.firstChild
        while(x){
            arry.push(dom.remove(node.firstChild))
            x=node.firstChild
        }
        return arry
    },
    attr(node, name, value){ // 重载
        if(arguments.length === 3){
          node.setAttribute(name, value)
        }else if(arguments.length === 2){
          return node.getAttribute(name)
        }
      },
    text(node,string){
        if(arguments.length===2){
            if('innerText' in node){
                node.innerText = string
            }else{
                node.textContent =string
            }
        }else if(arguments.length===1){
            if('innerText' in node){
                return node.innerText
            }else{
                return node.textContent
            }
        }
    },
    html(node,string){
        if(arguments.length===2){
            node.innerHTML = string
        }else if(arguments.lenght===1){
            return node.innerHtml
        }
    },
    style(node,name,value){
        if(arguments.length===3){
            node.style[name] = value
        }else if(arguments.length===2){
            if(typeof name === 'string'){
                return node.style[name]

            }else if(name instanceof object){
                for(let key in name){
                    node.style[key]= name[key]

                }
            }
        }
    },
    class:{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.className.contanins(className)
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    parent(node){
        return node.parentNode    
    },
    children(node){
        return node.children
    },
    sibling(node){
        return Array.from(node.parentNode.children).filter(n=>n!==node)
    },
    next(node){
        let x = node.nextSibling
        //判断下一个是不是字符串
        while(x &&x.nodeType===3){
            x=x.nextSibling
        }
        return x
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType===3){
            x = x.previousSibling
        }
        return x
    },
    each(nodeList,fn){
        for(let i =0 ;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){
        const list = dom.children(node.parentNode)
        let i ;
        for(i=0;i<list.length;i++){
            if(list[i]===node){
                break
            }
        }
        return i;
    }

    
}
