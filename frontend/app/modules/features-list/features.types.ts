import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'

export interface Input {
  id: string
  label: string
  type: string
}

export interface BotFeature {
  method: string
  name: string
  uiElements: Input[]
  icon?: string
}

export interface BotMenuResponse extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    result: Array<BotFeature>
  }
}

export interface BotFeaturesProps {
  features: Array<BotFeature>
}
