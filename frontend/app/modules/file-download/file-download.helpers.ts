import {
  DownloadFileItem,
  FileDownloadProgress,
  FileDownloadProgressEvent,
  FileDownloadProgressPayload,
} from './file-download.types'

const DOWNLOAD_ERROR_MESSAGES: Record<string, string> = {
  download_forbidden: 'скачивание файла запрещено',
  storage_permission_denied: 'нет доступа к хранилищу',
  file_too_large: 'файл слишком большой',
  already_in_progress: 'файл уже скачивается',
  access_denied: 'доступ запрещён',
  antivirus_threat_found: 'файл заблокирован антивирусом',
  dlp_error: 'файл заблокирован DLP',
  not_found: 'файл не найден',
  file_not_found: 'файл не найден',
  wrong_file_hash: 'хеш файла не совпадает',
  network_error: 'сетевая ошибка',
  io_error: 'ошибка ввода-вывода',
  error: 'неизвестная ошибка',
  no_bridge: 'SmartApp открыт вне клиента eXpress',
}

const LOADED_KEYS: Array<keyof FileDownloadProgressPayload> = [
  'downloadedBytes',
  'downloaded_bytes',
  'downloaded',
  'loaded',
  'receivedBytes',
  'received_bytes',
  'received',
  'bytes',
  'current',
]

const TOTAL_KEYS: Array<keyof FileDownloadProgressPayload> = [
  'totalBytes',
  'total_bytes',
  'total',
  'fileSize',
  'file_size',
  'size',
]

const PERCENT_KEYS: Array<keyof FileDownloadProgressPayload> = [
  'progress',
  'percent',
  'percentage',
  'downloadedPercent',
  'downloaded_percent',
]

const FILE_ID_KEYS: Array<keyof FileDownloadProgressPayload> = ['fileId', 'file_id', 'id']

const pickNumber = (
  payload: FileDownloadProgressPayload,
  keys: Array<keyof FileDownloadProgressPayload>
): number | null => {
  for (const key of keys) {
    const value = payload[key]

    if (typeof value === 'number' && !Number.isNaN(value)) return value
  }

  return null
}

const pickString = (
  payload: FileDownloadProgressPayload,
  keys: Array<keyof FileDownloadProgressPayload>
): string | null => {
  for (const key of keys) {
    const value = payload[key]

    if (typeof value === 'string' && value) return value
  }

  return null
}

export const getProgressFileId = (event: FileDownloadProgressEvent): string | null => {
  if (!event?.payload) return null

  return pickString(event.payload, FILE_ID_KEYS)
}

export const parseDownloadProgress = (
  event: FileDownloadProgressEvent,
  knownSize?: number
): FileDownloadProgress | null => {
  const payload = event?.payload
  if (!payload) return null

  const fileId = pickString(payload, FILE_ID_KEYS)
  if (!fileId) return null

  const totalBytes = pickNumber(payload, TOTAL_KEYS) ?? knownSize ?? 0
  const percent = pickNumber(payload, PERCENT_KEYS)
  const loadedBytes =
    pickNumber(payload, LOADED_KEYS) ??
    (percent === null ? null : Math.round((percent <= 1 ? percent : percent / 100) * totalBytes))

  if (loadedBytes === null) return null

  return {
    fileId,
    loadedBytes: Math.max(loadedBytes, 0),
    totalBytes: Math.max(totalBytes, loadedBytes),
  }
}

export const describeDownloadError = (errorCode?: string | null): string => {
  if (!errorCode) return DOWNLOAD_ERROR_MESSAGES.error

  return DOWNLOAD_ERROR_MESSAGES[errorCode] || errorCode
}

export const formatBytes = (bytes: number): string => {
  if (!bytes || bytes < 0) return '0 Б'

  const units = ['Б', 'КБ', 'МБ', 'ГБ']
  let value = bytes
  let unitIndex = 0

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024
    unitIndex += 1
  }

  const formattedValue = unitIndex === 0 ? `${Math.round(value)}` : value.toFixed(1).replace('.', ',')

  return `${formattedValue} ${units[unitIndex]}`
}

export const buildMissingFile = (): DownloadFileItem => {
  return {
    key: `random-123`,
    name: `lalala-topola.jpeg`,
    size: 2939485,
    exists: false,
    file: {
      file: '/uploads/files/lalala-topola.jpeg',
      fileEncryptionAlgo: 'stream',
      fileHash: 'qvnfOGsh/mKR/yP7Mv0SgA+L42HqKidql6GMJKLXXXk=',
      fileId: '3f6592cd-1234-583a-936b-abfbe71e2169',
      fileMimeType: 'image/jpeg',
      fileName: 'lalala-topola.jpeg',
      filePreview: null,
      filePreviewHeight: null,
      filePreviewWidth: null,
      fileSize: 6291462,
      key: null,
      type: 'DOCUMENT',
      chunkSize: 2097152,
    },
  }
}
