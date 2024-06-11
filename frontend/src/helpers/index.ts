import { Input } from '../types'
import parseISO from 'date-fns/parseISO'
import ru from 'date-fns/locale/ru'
import format from 'date-fns/format'

export interface FormValues {
  [key: string]: string | undefined
}

export const getFormInitialValues: (uiElements: Input[]) => FormValues = uiElements => {
  return uiElements?.reduce((acc: FormValues, item) => {
    acc[item.id] = undefined
    return acc
  }, {})
}

export const dateFormat = (timestamp: string) => {
  if (timestamp) {
    let toISODate = parseISO(timestamp)
    return format(toISODate, 'EEEE d LLLL y - H:mm', {
      locale: ru,
    })
  }
}

export const getQueryParam = (param: string) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

export const setupTheme = () => {
  const theme = getQueryParam('theme') || 'default'

  document.documentElement.setAttribute('theme', theme)
}
