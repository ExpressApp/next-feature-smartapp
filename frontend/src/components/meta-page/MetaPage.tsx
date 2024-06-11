import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setRedirectPath } from '../../redux/actions/ui'
import { getMeta } from '../../redux/selectors/client'
import { setMeta } from '../../redux/actions/client'
import JsonViewerEditor from '../ui/json-editor/JsonViewer'

export default function MetaPage({ name }) {
  const dispatch = useDispatch()
  const meta = useSelector(getMeta)

  useEffect(() => {
    return () => {
      dispatch(setRedirectPath(''))
      dispatch(setMeta(null))
    }
  }, [dispatch])

  return (
    <>
      <div className='feature-page'>
        <FeaturePageHeader name={name} />
        {meta && (
          <div className='response-json'>
            Metadata
            <JsonViewerEditor height={24} botResponse={meta.payload} />
          </div>
        )}
      </div>
    </>
  )
}
