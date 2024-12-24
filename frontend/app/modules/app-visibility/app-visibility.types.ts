import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'

export interface AppVisibilitySubscriptionEvent extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    visible: boolean
  }
}
