import { EmitterEventPayload } from "@expressms/smartapp-bridge/build/main/types/eventEmitter"
import { STATUS } from "@expressms/smartapp-sdk/build/main/types";

export interface KeycloakTokenResponse extends Omit<EmitterEventPayload, 'payload'> {
  payload: {
    status: STATUS
    result: string
  }
}
