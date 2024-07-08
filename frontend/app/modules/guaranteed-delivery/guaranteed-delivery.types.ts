import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'

export interface EchoResponse extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    result: string
    status: STATUS
    errorCode?: string
  }
}
