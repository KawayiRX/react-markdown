type Anchor = {
  [key: string]: { id: string; title: string }[]
}

export const anchor: Anchor = {
  '/react/docs': [
    {
      id: 'jsx',
      title: 'JSX'
    },
    {
      id: 'render',
      title: '元素渲染'
    },
    {
      id: 'props',
      title: '组件$Props'
    },
    {
      id: 'event',
      title: '事件处理'
    },
    {
      id: 'uper',
      title: '状态提升'
    },
    {
      id: 'context',
      title: 'Context'
    },
    {
      id: 'error',
      title: 'Error Boundaries'
    },
    {
      id: 'refs',
      title: 'Refs'
    },
    {
      id: 'renderProps',
      title: 'Render Props'
    }
  ]
}
