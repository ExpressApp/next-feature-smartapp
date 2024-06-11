import { createSelector } from 'reselect'
import { AppState } from '../../types'

export const getAttachments = createSelector([(state: AppState) => state.client.attachments], features => features)

export const getExpressResponse = createSelector([(state: AppState) => state.client.response], response => response)

export const getMeta = createSelector([(state: AppState) => state.client.meta], meta => meta)

export const getLocation = createSelector(
  [(state: AppState) => state.client.location],
	location => location
)

export const getExpressNotifications = createSelector(
  [(state: AppState) => state.client.notifications],
	notifications => notifications
)

export const getSelfProfile = createSelector(
  [(state: AppState) => state.client.selfProfile],
	selfProfile => selfProfile
)
