/**1.vdom变真实dom
 * 2.虚拟dom属性同步给真实dom
 * 3.递归childrenDom
 * 4.append到目标容器
 * @param vdom 要渲染的虚拟对象
 * @param container append的目标容器节点
 */

function render(vdom, container) {
  const dom = createDOM(vdom);
  container.appendChild(dom);
}

/**
 * vdom转化真实DOM
 * @param vdom 虚拟dom
 */
function createDOM(vdom) {
  //vdom的类型:字符串,数字,直接返回文本节点
  if (typeof vdom === "string" || typeof vdom === "number") {
    return document.createTextNode(vdom);
  }

  //否则就是一个虚拟对象---即:react元素 返回对应标签
  let { type, props } = vdom;
  let dom = document.createElement(type);
  updateProps(dom, props);
  //props 的children 处理
  if (
    typeof props.children === "string" ||
    typeof props.children === "number"
  ) {
    //children 只是文档
    dom.textContent = props.children;
  } else if (typeof props.children === "object" && props.children.type) {
    //children也是一个vdom
    //递归render,目标容器变成自己做后面的append
    render(props.children, dom);
  } else if (Array.isArray(props.children)) {
    //多个子元素的处理
    reconcileChildren(props.children, dom);
  } else {
    //兜底 上面的情况都不存在时 其实也不太有
    document.textContent = props.children ? props.children.toString() : "";
  }
  //把真实dom,作为一个dom属性放在虚拟dom上,为以后的更新做准备
  //vdom.dom = dom;
  return dom;
}
/**
 * 虚拟dom的属性挂载 挂载到真实dom的属性上
 * @param dom 真实dom
 * @param newProps 新属性对象
 */
function updateProps(dom, newProps) {
  for (let key in newProps) {
    if (key === "children") continue; //遇到子元素,重新循环 子元素需要另外的处理reconcileChildren
    if (key === "style") {
      //样式
      let styleObj = newProps.style;
      for (let attr in styleObj) {
        dom.style[attr] = styleObj[attr];
      }
    } else {
      //处理className, 此代码不为样式属性外的其他属性做举例处理
      dom[key] = newProps[key];
    }
  }
}
/**
 * @param childrenVdom 多个子元素的虚拟dom
 * @param parentDOM 父元素
 */
function reconcileChildren(childrenVdom, parentDOM) {
  for (let i = 0; i < childrenVdom.length; i++) {
    let childVdom = childrenVdom[i];
    render(childVdom, parentDOM);
  }
}
const ReactDOM = { render };
export default ReactDOM;
