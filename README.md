1.cnpm i create-react-app -g
2.create-react-app myReact
3.cd my-react 
//用于弹出配置,这里有坑,不要做弹出操作,
//会导致set DISABLE_NEW_JSX_TRANSFORM=true 不成功在script里
//用于禁用新的jsx 转化规则
4.yarn enject
5.npm run eject

6.删除所有无关文件 仅留入口文件 
  6.1. public 的html
  6.2. src  的index 

7.我的react版本是17.0.2 
  7.1. 17以后的jsx编译不再生成React.createElement 
  7.2.  而是在babel编译阶段 会自动import {jsx} from “react/jsx-runtime” 然后jsx(),使用方法同createElement,来转化 jsx了 ,目的可能是为了解耦 然后可以不用import React from "react";
  7.3. 所以要去script里将jsx() 禁用 因为要自己实现 createElement方法

8.console 出来我们需要的dom对象 复制,删除多余属性等待使用 
9.src下新建react.js 和react-dom.js
10.createElement函数里
  10.1

11.render函数里

12.浏览器查看 元素是否被append到目标容器中,此时还没写属性的操作