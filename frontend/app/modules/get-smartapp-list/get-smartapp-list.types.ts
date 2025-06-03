import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'
import { SmartAppListEntry } from '@expressms/smartapp-sdk/build/main/types'

export interface SmartAppListSubscriptionEvent extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    smartappList: SmartAppListEntry[]
  }
}
