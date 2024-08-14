import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'

export type EntityType = 'huid' | 'chat' | 'smartapp'

export interface UnreadCounterSubscriptionEvent extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    unreadCounter: number
    source: {
      type: EntityType
      id: string
    }
  }
}
