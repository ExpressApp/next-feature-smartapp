import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { CLIENT_STORAGE } from '../../constants'
import './ClientStorage.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clientStorageClear,
  clientStorageGet,
  clientStorageLoaded,
  clientStorageRemove,
  clientStorageSet,
} from '../../redux/actions/client'
import { AppState } from '../../types'

const initData = {
  string1: 'test string',
  number1: 123.456,
  boolean1: false,
  null1: null,
  array1: [1, true, 'text'],
  object1: { param1: 'val1' },
}

function ClientStorage() {
  const dispatch = useDispatch()
  const storageData = useSelector<AppState, string>(state => JSON.stringify(state.client.storageData, null, 2))
  const [dataToSave, setData] = useState(JSON.stringify(initData, null, 2))
  const [key, setKey] = useState('key1')

  useEffect(() => {
    dispatch(clientStorageLoaded(''))
  }, [dispatch])

  const handleDataChange = e => setData(e.target.value)

  const handleKeyChange = e => setKey(e.target.value)

  const handleSet = () => dispatch(clientStorageSet(key, JSON.parse(dataToSave)))

  const handleGet = () => dispatch(clientStorageGet(key))

  const handleRemove = () => dispatch(clientStorageRemove(key))

  const handleClear = () => dispatch(clientStorageClear())

  return (
    <div className="feature-page">
      <FeaturePageHeader name={CLIENT_STORAGE.name} />
      <span className="feature-page__title">Сохранение записи</span>
      <div className="form-buttons">
        <input className="input" onChange={handleKeyChange} value={key} type="text" id="key1-text" />
      </div>
      <div className="form-buttons">
        <textarea className="input" id="json-text-save" rows={10} value={dataToSave} onChange={handleDataChange} />
      </div>
      <div className="form-buttons">
        <button className="btn--submit" onClick={handleSet} type="button" id="data-save">
          Сохранить
        </button>
      </div>
      <div className="from-block">
        <span className="feature-page__title">Получение записи</span>
        <div className="form-buttons">
          <input className="input" onChange={handleKeyChange} value={key} type="text" id="key2-text" />
        </div>
        <div className="form-buttons">
          <textarea className="input" id="json-text-load" rows={10} value={storageData} />
        </div>
        <div className="form-buttons">
          <button className="btn--submit" onClick={handleGet} type="button" id="data-load">
            Загрузить
          </button>
        </div>
      </div>
      <div className="from-block">
        <span className="feature-page__title">Удаление записи</span>
        <div className="form-buttons">
          <input className="input" onChange={handleKeyChange} value={key} type="text" id="key2-text" />
        </div>
        <div className="form-buttons">
          <button className="btn--submit" onClick={handleRemove} type="button" id="data-remove">
            Удалить
          </button>
        </div>
      </div>
      <div className="from-block">
        <span className="feature-page__title">Очистка базы</span>
        <div className="form-buttons">
          <button className="btn--submit" onClick={handleClear} type="button" id="data-clear">
            Очистить
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClientStorage
