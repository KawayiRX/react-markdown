// eslint-disable-next-line max-classes-per-file
import * as echarts from 'echarts'
import { EChartsOption, ECharts } from 'echarts'

// eslint-disable-next-line no-unused-vars
function setBackground<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    setBackground(color: string) {
      if (!this.chart) return
      this.chart.setOption({ ...this.options, backgroundColor: color })
    }
  }
}

@setBackground
export default class BaseEcharts {
  private config: Record<string, unknown>

  private options: EChartsOption

  private dom: HTMLDivElement | HTMLCanvasElement | string

  private chart!: ECharts

  constructor(
    dom: HTMLDivElement | HTMLCanvasElement | string,
    options: EChartsOption,
    config: Record<string, unknown>
  ) {
    this.config = config
    this.options = options
    this.dom = dom
  }

  init(): void {
    if (!this.dom) {
      throw new Error('请传入元素id或者元素')
    }
    const d = typeof this.dom === 'string' ? document.getElementById(this.dom) : this.dom
    this.chart = echarts.init(d!, this.config)
    this.chart.setOption(this.options)
  }

  instance(): ECharts {
    return this.chart
  }

  update(): void {
    if (!this.chart) {
      throw new Error('Echarts 未初始化')
    }
    this.chart.setOption(this.options)
  }
}
