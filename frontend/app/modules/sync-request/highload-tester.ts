import { Bridge } from '@expressms/smartapp-sdk'

export default class HighloadTester {
  private interval: NodeJS.Timeout | null = null
  totalResponseCount = 0
  totalRequestCount = 0
  totalRequestsTime = 0

  intervalCallback() {
    const tsStart = new Date().getTime()
    this.totalRequestCount++

    Bridge?.sendBotEvent({
      method: 'menu',
      params: {},
      sync_request: true,
    })
      .then(() => {
        const tsEnd = new Date().getTime()
        this.totalRequestsTime += tsEnd - tsStart
        this.totalResponseCount++
      })
      .catch(() => {})
  }

  stop() {
    if (!this.interval) return

    clearInterval(this.interval)
    this.interval = null
  }

  start(rps: number) {
    this.stop()

    const delay = 1000 / rps

    this.interval = setInterval(this.intervalCallback.bind(this), delay)
  }

  getMetrics() {
    return {
      totalResponseCount: this.totalResponseCount,
      totalRequestCount: this.totalRequestCount,
      totalRequestsTime: this.totalRequestsTime,
    }
  }
}
