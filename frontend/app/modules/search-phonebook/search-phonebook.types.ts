import { EmitterEventPayload } from '@expressms/smartapp-bridge/build/main/types/eventEmitter.d'
import { STATUS } from '@expressms/smartapp-sdk/build/main/types'

export type PhonebookEntry = {
  avatar: string | null
  name: string | null
  contacts: {
    contactType: string
    contact: string
  }[]
}

export interface SearchCorpPhonebookResponse extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    status: STATUS
    errorCode?: string | null
    corpPhonebookEntries: Array<PhonebookEntry>
  }
}
