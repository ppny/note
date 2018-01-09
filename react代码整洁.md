## react代码整洁
### 整洁代码是自注释的
### 命名
> 布尔变量或返回布尔值的函数应该以“is”，“has”或“should”开头。
### 整洁代码遵循成熟的设计模式和最佳实践
### 整洁代码不需要花长时间来编写
### 默认值
### 从渲染分离有状态的部分
### 使用无状态组件
> 创建无状态函数式组件形式是从React0.14版本开始出现的。它是为了创建纯展示组件，这种组件只负责根据传入的props来展示，不涉及到要state状态的操作。

> 官方指出：在大部分React代码中，大多数组件被写成无状态的组件，通过简单组合可以构建成其他的组件等；这种通过多个简单然后合并成一个大应用的设计模式被提倡。

```jsx
// Dirty
class TableRowWrapper extends Component {
    render() {
        return (
        <tr>
            {this.props.children}
        </tr>
        );
    }
} 
```
```jsx
// Clean
const TableRowWrapper = ({ children }) => (
  <tr>
    {children}
  </tr>
);
```
### 剩余/扩展属性
### 合理使用解构