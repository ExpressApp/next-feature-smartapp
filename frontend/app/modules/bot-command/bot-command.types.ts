import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { BotFeature } from '../features-list/features.types'

export type BotCommandPageProps = {
  botFeature: BotFeature
}

export type UuidInputProps = {
  id: string
  label: string
  onChange: (id: string, uuids: string[]) => void
}

export interface FileData {
  fileId: string
  fileName: string
  chunkSize: number
  file: string
  fileEncryptionAlgo: string
  fileHash: string
  fileMimeType: string
  fileSize: number
  type: 'document' | 'image' | 'video'
  filePreview?: string
  filePreviewHeight?: number
  filePreviewWidth?: number
  blurPreviewFile?: string
}

export interface UploadFileResponse extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    status: STATUS
    errorCode?: string
    record: FileData
  }
}

export interface UploadFilesResponse extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    status: STATUS
    errorCode?: string
    records: FileData[]
  }
}

export type FileTextResponse = {
  attr: string
  value: string
}
