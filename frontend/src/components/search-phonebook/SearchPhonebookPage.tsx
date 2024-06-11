import { useEffect, useState } from 'react'
import { SEARCH_PHONEBOOK } from '../../constants'
import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import JsonViewer from '../ui/json-editor/JsonViewer'
import { useDispatch, useSelector } from 'react-redux'
import { resetExpressResponse, searchCorporatePhonebook, searchLocalPhonebook } from '../../redux/actions/client'
import { getExpressResponse } from '../../redux/selectors/client'

export default function SearchPhonebookPage() {
  const dispatch = useDispatch()
  const response = useSelector(getExpressResponse)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    dispatch(resetExpressResponse())
  }, [dispatch])

  const handleChange = e => setFilter(e.target.value || null)

  const handleCorpSearch = () => {
    dispatch(resetExpressResponse())
    dispatch(searchCorporatePhonebook(filter))
  }

  const handleLocalSearch = () => {
    dispatch(resetExpressResponse())
    dispatch(searchLocalPhonebook(filter))
  }

  return (
    <div className="feature-page">
      <FeaturePageHeader name={SEARCH_PHONEBOOK.name} />
      <div className="feature-page__form">
        <span className="feature-page__title">Filter</span>
        <input className="input" onChange={handleChange} value={filter} id="filter-text" />
        <div className="form-buttons">
          <button className="btn--submit" onClick={handleCorpSearch} type="button" id="corp-submit">
            <span className="material-icons">cases</span>
            Корпоративный поиск контактов
          </button>
        </div>
        <div className="form-buttons">
          <button className="btn--submit" onClick={handleLocalSearch} type="button" id="local-submit">
            <span className="material-icons">phone_iphone</span>
            Локальный поиск контактов
          </button>
        </div>
      </div>
      <br />
      <br />
      {response?.payload && <JsonViewer botResponse={response.payload} id="response" />}
    </div>
  )
}
