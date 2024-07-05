import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'

export interface ConnnectionStatusSubscriptionEvent extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    connectionStatus: string
  }
}
