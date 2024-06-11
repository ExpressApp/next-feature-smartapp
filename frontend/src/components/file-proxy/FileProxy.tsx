import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { FILE_PROXY } from '../../constants'
import classNames from 'classnames'
import { useState } from 'react'

function FileProxy() {
  const [url, setUrl] = useState('https://cts3dev.ccsteam.ru/api/v1/smartapp_proxy/zgubb4kz4xvqgcwi/upload/iblock/523/cf32v2zoh1rxzriy9xt3iqqtbg4dl254.mp4')
  const [videoUrl, setVideoUrl] = useState(url)

  const handleInputChange = e => setUrl(e.target.value)

  const handleSubmit = () => setVideoUrl(url)

  return (
    <div className="feature-page file-proxy">
      <FeaturePageHeader name={FILE_PROXY.name} />
      <div>
        <b>Формат</b><br/>
        <sup>
            https://<u>cts</u>/api/v1/smartapp_proxy/<u>host_id</u>/<u>path_to_video</u>
        </sup>
      </div>
      <div className='form-buttons'>
        <input
          className={classNames({
            input: true,
          })}
          onChange={handleInputChange}
          value={url}
          type={'text'}
          id="url"
        />
        </div>
      <div className='form-buttons'>
        <button
          className={classNames({ 'btn--submit': true })}
          type="submit"
          onClick={handleSubmit}
          id="submit"
        >
          Play
        </button>
      </div>
      <video src={videoUrl} autoPlay controls width="100%" style={{ margin: "40px 0 0 0" }} />
    </div>
  )
}

export default FileProxy
