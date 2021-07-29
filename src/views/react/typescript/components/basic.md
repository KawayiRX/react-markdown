import { H1 } from "components/highlight/styles.tsx";

<H1>基础类型</H1>

- Typescript是javascript的超集，它兼容javascript的所有语法，并赋予javascript静态类型检查能力。
    - number
    - string
    - boolean
    - bigint: BigInt()
    - symbol: Symbol()
    - Arrays
    - Tuple: 元组类型允许表示一个已知元素数量和类型的数组
    - enum 
    - Any 
    - Void 
    - Never: 不会有返回值的类型
    - Null 和 Undefined 
    - Object
    - 类型断言: 告诉编译器确定是某个类型(val as type | <'type'>value)
    - Union Types: 联合类型(type1 | type2)
    - Type Aliases: 类型别名(type = ?)
    - Interfaces: 接口
```typescript

const a: number = '333';

```