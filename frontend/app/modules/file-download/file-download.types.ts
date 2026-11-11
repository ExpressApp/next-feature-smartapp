import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'
import { File } from '@expressms/smartapp-sdk/build/main/types'

export interface DownloadFileItem {
  key: string
  name: string
  size: number
  exists: boolean
  file: File
}

export interface DownloadFilesResult {
  files: DownloadFileItem[]
}

export interface DownloadFilesPayload {
  status: string
  result?: DownloadFilesResult
  errors?: Array<{
    id?: string
    reason?: string
    meta?: {
      method?: string
    }
  }>
}

export interface DownloadFilesResponse extends Omit<EmitterEventPayload, 'payload'> {
  payload: DownloadFilesPayload
}

export interface FileDownloadProgressPayload {
  fileId?: string
  file_id?: string
  id?: string

  totalBytes?: number
  total_bytes?: number
  total?: number
  fileSize?: number
  file_size?: number
  size?: number

  downloadedBytes?: number
  downloaded_bytes?: number
  downloaded?: number
  loaded?: number
  receivedBytes?: number
  received_bytes?: number
  received?: number
  bytes?: number
  current?: number

  progress?: number
  percent?: number
  percentage?: number
  downloadedPercent?: number
  downloaded_percent?: number
}

export interface FileDownloadProgressEvent extends Omit<EmitterEventPayload, 'payload'> {
  payload: FileDownloadProgressPayload
}

export interface FileDownloadProgress {
  fileId: string
  loadedBytes: number
  totalBytes: number
}
