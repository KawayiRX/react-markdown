import { H1 } from "components/highlight/styles.tsx";

<H1>基础类型</H1>

- Typescript是javascript的超集，它兼容javascript的所有语法，并赋予javascript静态类型检查能力。
    - number
    - string
    - boolean
    - bigint: BigInt()
    - symbol: Symbol()
    - Array
    - tuple: 元组类型允许表示一个已知元素数量和类型的数组

    ```typescript width=100%

    const a: number = 1;
    const b: string = '1';
    const c: boolean = true

    const arr: string[] | Array<string>

    const arr1: [a: string, b: number]; // Tuple

    ```
    - enum 

    ```typescript width=100%
    // 数字枚举 递增
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    // 字符串枚举
    enum Direction {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT",
    }

    // 常量枚举（编译阶段不生成额外代码）
    const enum Enum {
        A = 1,
        B = A * 2
    }

    ```

    - any 
    - void 
    - never: 不会有返回值的类型
    - null 和 undefined 
    - Object
    - 类型断言: 告诉编译器确定是某个类型(val as type | <'type'>value)
    - Union Types: 联合类型(type1 | type2)
    - Type Aliases: 类型别名(type = ?)
    - Interfaces: 接口

- 类型保护
    - typeof 获取类型
    ```typescript width=100% 

    function transStr(str: string | null): string[] {
        return str.split(' ') // Error: Object is possibly 'null'.
    }

    function transStr(str: string | null): string[] {
        if (typeof str === 'string') {
            return str.split(' ')
        }
        return []
    }

    ```

    - in操作符
    ```typescript width=100%
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };

    function move(animal: Fish | Bird) {
        if ("swim" in animal) {
            return animal.swim();
        }
        return animal.fly();
    }
    ```
    - instanceof
    - 类型断言
    ```typescript width=100%
    function isFish(pet: Fish | Bird): pet is Fish {
        return (pet as Fish).swim !== undefined;
    }
    ```