import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter'

export enum Methods {
  BACK_PRESSED = 'back_pressed',
  ROUTING_CHANGED = 'routing_changed',
  CLEAN_CACHE = 'clean_cache',
  MOVE_TO_ROOT = 'move_to_root',
  SMARTAPP_RPC = 'smartapp_rpc',
}

export interface IosSwipeSubscriptionEvent extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    swipe_direction: 'back' | 'forward'
  }
}
