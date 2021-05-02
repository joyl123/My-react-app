/**
 * @param type 元素类型
 * @param config 元素的配置对象
 * @param children 元素的子元素们
 */

function createElement(type, config, children) {
  // 结构config
  let props = { ...config };
  //判断方法入参 长度,
  // 大于3 则存在自元素(有标签的子元素)
  if (arguments.length > 3) {
    //获取子元素
    children = Array.prototype.slice.call(arguments, 2);
  }
  props.children = children;
  return {
    type,
    props,
  };
}
const React = { createElement };
export default React;
