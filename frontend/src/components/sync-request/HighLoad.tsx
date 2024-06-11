import { useDispatch, useSelector } from "react-redux"
import { toggleHighloadTest } from "../../redux/actions/ui"
import { AppState } from "../../types"

function HighLoad() {
  const dispatch = useDispatch()
  const { running, requestRps, responseRps, responseTimeAvg } = useSelector((state: AppState) => state.ui.highloadTest)

  const handleToggleHighLoadTest = () => dispatch(toggleHighloadTest())

  return (
    <div className="from-block">
      <span className="feature-page__title"><b>Нагрузочное тестирование</b></span>
      <br/>
      <br/>
      <span className="feature-page__title">RPS отправленных запросов</span>
      <div className="form-buttons">
        <input className="input" value={requestRps} type="text" id="req-rps-text" disabled />
      </div>
      <span className="feature-page__title">RPS успешных ответов</span>
      <div className="form-buttons">
        <input className="input" value={responseRps} type="text" id="resp-rps-text" disabled />
      </div>
      <span className="feature-page__title">Среднее время ответа</span>
      <div className="form-buttons">
        <input className="input" value={responseTimeAvg} type="text" id="resp-avg-text" disabled/>
      </div>
      <div className="form-buttons">
        <button className="btn--submit" onClick={handleToggleHighLoadTest} type="button" id="data-load">
          {running ? "Остановить тест" : "Запуск теста"}
        </button>
      </div>
    </div>
  )
}

export default HighLoad
