import React, { FC, useState } from 'react'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'
import Button from '../../components/Button'

const FileProxyPage: FC = () => {
  const [url, setUrl] = useState(
    `https://${location.hostname}/api/v1/smartapp_proxy/zgubb4kz4xvqgcwi/upload/iblock/1e7/nsj2kkhq2ibun8s2l3jl4gbocasbybzd/eXpress_video.mp4`
  )
  const [videoUrl, setVideoUrl] = useState(url)

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value)

  const handleSubmit = () => setVideoUrl(url)

  return (
    <FeaturePage>
      <FeatureHeader name="Файловый прокси" />
      URL видео
      <Input onChange={handleUrlChange} value={url} id="url" />
      <sup>
        Формат:
        <br />
        https://<u>cts</u>/api/v1/smartapp_proxy/<u>host_id</u>/<u>path_to_video</u>
      </sup>
      <Button onClick={handleSubmit} id="submit" title="Воспроизвести" icon="play_arrow" />
      <br />
      <br />
      <video src={videoUrl} autoPlay controls width="100%" />
    </FeaturePage>
  )
}

export default FileProxyPage
