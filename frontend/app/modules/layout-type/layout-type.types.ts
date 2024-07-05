import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'

export interface LayoutSubscriptionEvent extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    layoutType: string
  }
}
