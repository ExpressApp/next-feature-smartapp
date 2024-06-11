import { useLayoutEffect, useState } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

function PerfomanceChart({ width, height, data }) {
  const [chartObj, setChartObj] = useState(null)

  const calcAvg = attr => {
    const filtered = data.filter(row => row[attr] !== undefined)
    const avg = filtered.reduce((avg, row) => avg + ~~row[attr] / filtered.length, 0)
    return parseInt(avg, 10)
  }

  const createRange = (chart, value, label, color) => {
    const data = chart.xAxes.getIndex(0).makeDataItem({ value })
    const range = chart.yAxes.getIndex(0).createAxisRange(data)

    range.get('grid').setAll({
      stroke: am5.color(color),
      strokeOpacity: 1,
      strokeDasharray: 2,
      strokeWidth: 3,
      location: 1,
    })
    range.get('label').setAll({
      text: label,
      fill: am5.color('#fff'),
      inside: true,
      centerX: 0,
      location: 1,
      dx: 0,
      background: am5.RoundedRectangle.new(chart.root, {
        fill: am5.color(color),
        fillOpacity: 0.8,
      }),
    })
    range.get('label').adapters.add('x', () => chart.plotContainer.width())
    chart.plotContainer.onPrivate('width', () => range.get('label').markDirtyPosition())
  }

  const createSerie = (chart, attr, color) => {
    const series = chart.series.push(
      am5xy.ColumnSeries.new(chart.root, {
        name: attr,
        xAxis: chart.xAxes.getIndex(0),
        yAxis: chart.yAxes.getIndex(0),
        valueYField: attr,
        categoryXField: 'eventNumber',
        clustered: true,
        tooltip: am5.Tooltip.new(chart.root, {}),
        fill: am5.color(color),
      })
    )
    series.data.setAll(data)
    series.get('tooltip').label.set('text', '{valueY}')
  }

  const createRanges = chart => {
    while (chart.yAxes.getIndex(0).axisRanges.length) {
      chartObj.yAxes.getIndex(0).axisRanges.removeIndex(0)
    }

    ;[
      { attr: 'sync', color: '#070' },
      { attr: 'async', color: '#49b' },
    ].forEach(({ attr, color }) => {
      const avg = calcAvg(attr)
      createRange(chart, avg, `${avg} ms`, color)
    })
  }

  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv')

    const theme = am5themes_Animated.new(root)
    theme.rule('Label').setAll({ fontSize: '0.6em' })
    root.setThemes([theme])

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        layout: root.verticalLayout,
        paddingRight: 80,
      })
    )

    chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
        min: 0,
      })
    )

    chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          cellStartLocation: 0.2,
          cellEndLocation: 0.8,
        }),
        categoryField: 'eventNumber',
      })
    )

    chart.xAxes.getIndex(0).data.setAll(data)

    createSerie(chart, 'sync', '#070')
    createSerie(chart, 'async', '#49b')
    createRanges(chart)
    setChartObj(chart)

    let legend = chart.children.push(am5.Legend.new(root, {}))
    legend.data.setAll(chart.series.values)

    chart.set('cursor', am5xy.XYCursor.new(root, {}))

    return () => root.dispose()
  }, [])

  useLayoutEffect(() => {
    if (!chartObj) return

    chartObj.xAxes.getIndex(0).data.setAll(data)
    chartObj.series.getIndex(0).data.setAll(data)
    chartObj.series.getIndex(1).data.setAll(data)

    createRanges(chartObj)
  }, [data, chartObj])

  return <div id="chartdiv" style={{ width, height }}></div>
}

export default PerfomanceChart
