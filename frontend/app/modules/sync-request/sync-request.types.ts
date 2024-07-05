export type PerformanceTestResult = {
  sync: number
  async: number
  eventNumber: string
}

export interface ComponentParams {
  width: string
  height: string
  data: Array<PerformanceTestResult>
}

export type DataAttr = 'sync' | 'async'
