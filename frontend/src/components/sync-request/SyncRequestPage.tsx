import { useDispatch, useSelector } from 'react-redux'
import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { SYNC_REQUEST_FEATURE } from '../../constants'
import PerfomanceChart from './PerfomanceChart'
import { togglePerformanceTest } from '../../redux/actions/ui'
import { AppState } from '../../types'
import { sendMenuAsyncEvent, sendMenuSyncEvent } from '../../redux/actions/bot'
import JsonViewerEditor from '../ui/json-editor/JsonViewer'
import HighLoad from './HighLoad'

export default function SyncRequestPage() {
  const dispatch = useDispatch()
  const { results, progress, running } = useSelector((state: AppState) => state.ui.performanceTest)
  const { menuResponse } = useSelector((state: AppState) => state.bot)

  const handleTogglePerformanceTest = () => dispatch(togglePerformanceTest())

  const handleSendSyncEvent = () => dispatch(sendMenuSyncEvent())

  const handleSendAsyncEvent = () => dispatch(sendMenuAsyncEvent())

  return (
    <>
      <div className="feature-page">
        <FeaturePageHeader name={SYNC_REQUEST_FEATURE.name} />
        <span className="feature-page__title">
          <b>Тайминги запросов</b>
        </span>
        <PerfomanceChart width="100%" height="300px" data={results} />
        <div className="form-buttons">
          <button className="btn--submit" onClick={handleTogglePerformanceTest} type="button" id="run-test">
            {running ? `[${progress}%] Остановить тест` : 'Запуск теста'}
          </button>
        </div>
        <br />
        <br />
        <span className="feature-page__title">
          <b>Запрос вручную</b>
        </span>
        <div className="form-buttons">
          <button className="btn--submit" type="submit" onClick={handleSendSyncEvent} id="subscribe-btn">
            Синхронный
          </button>
          <button className="btn--submit" type="submit" onClick={handleSendAsyncEvent} id="unsubscribe-btn">
            Асинхронный
          </button>
        </div>
        <br />
        {menuResponse && <JsonViewerEditor height={24} botResponse={menuResponse} />}
        <HighLoad/>
      </div>
    </>
  )
}
