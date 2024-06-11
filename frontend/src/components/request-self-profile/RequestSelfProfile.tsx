import React, { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSelfProfile } from '../../redux/selectors/client'
import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { REQUEST_SELF_PROFILE_FEATURE } from '../../constants'
import { requestSelfProfile, setSelfProfile } from '../../redux/actions/client'
import './RequestSelfProfile.scss'
import JsonViewer from '../ui/json-editor/JsonViewer'

function RequestSelfProfile() {
  const dispatch = useDispatch()
  const selfProfile = useSelector(getSelfProfile)
  const [isJSONViewer, setIsJSONViewer] = useState(true)

  const toggleIsJSONViewer = () => setIsJSONViewer(!isJSONViewer)

  const handleSubmit = () => {
    dispatch(requestSelfProfile())
  }

  useLayoutEffect(() => {
    dispatch(setSelfProfile(null))
  }, [dispatch])

  return (
    <div className="feature-page">
      <FeaturePageHeader name={REQUEST_SELF_PROFILE_FEATURE.name} />
      <div className='form-buttons'>
        <button
          className='btn--submit'
          onClick={handleSubmit}
          type='button'
          id='submit'
        >
          Запросить свой профиль
        </button>
      </div>
      <div className='request-self-profile__json-viewer'>
        {selfProfile && (
          <JsonViewer
            isJSONViewer={isJSONViewer}
            botResponse={selfProfile}
            toggleIsJSONViewer={toggleIsJSONViewer}
          />
        )}
      </div>
    </div>
  )
}

export default RequestSelfProfile
