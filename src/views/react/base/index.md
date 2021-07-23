import {H1} from 'components/highlight/styles.tsx'
import Copm from './components/comp.md'
import Event from './components/event.md'
import UperState from './components/uper.md'
import IContext from './components/context.md'
import Show from './components/show.md'
import Jsx from './components/jsx.md'

<H1 id="jsx">
  React 是一个用于构建用户界面的 JavaScript 库。（单项数据， 不可变数据）
</H1>

* ## JSX 

<Jsx/>

<H1 id="render">
  元素渲染
</H1>

<Show />

<H1 id="props">
  组件和Props
</H1>

<Copm />

  * React中组件的Props属性是只读的，不能修改Props的属性（React数据流向是从上至下）
  * Props 的 默认值是**true**

<H1 id="event">
  事件处理
</H1>

<Event />

<H1 id="uper">
  状态提升
</H1>

<UperState />

<H1 id="context">
   Context (为组件提供跨层级传递状态的能力)
</H1>

<IContext/>