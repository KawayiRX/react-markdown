import {H1} from 'components/styled'

- init

```jsx render=true
const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Echarts = () => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('main'), {
      locale: 'EN'
    })
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    myChart.setOption(option)
    myChart.on('click', () => {
      console.log('click')
    })
  }, [])

  return <Container id="main" />
}

render(<Echarts />)
```
