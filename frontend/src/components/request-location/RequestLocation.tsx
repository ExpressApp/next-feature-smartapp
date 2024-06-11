import React, { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocation } from '../../redux/selectors/client'
import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { REQUEST_LOCATION } from '../../constants'
import { requestLocation, setLocation } from '../../redux/actions/client'
import './RequestLocation.scss'
import JsonViewer from '../ui/json-editor/JsonViewer'

function RequestLocation() {
  const dispatch = useDispatch()
  const location = useSelector(getLocation)
  const [isJSONViewer, setIsJSONViewer] = useState(true)

  const toggleIsJSONViewer = () => setIsJSONViewer(!isJSONViewer)

  const handleSubmit = () => {
    dispatch(requestLocation())
  }

  useLayoutEffect(() => {
    dispatch(setLocation(null))
  }, [dispatch])

  return (
    <div className="feature-page">
      <FeaturePageHeader name={REQUEST_LOCATION.name} />
      <div className='form-buttons'>
        <button
          className='btn--submit'
          onClick={handleSubmit}
          type='button'
          id='submit'
        >
          Определить
        </button>
      </div>
      <div className='request-location__json-viewer'>
        {location && (
          <JsonViewer
            isJSONViewer={isJSONViewer}
            botResponse={location}
            toggleIsJSONViewer={toggleIsJSONViewer}
          />
        )}
      </div>
    </div>
  )
}

export default RequestLocation
