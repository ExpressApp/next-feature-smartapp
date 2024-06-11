import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { OPEN_WEB_PAGE_FEATURE } from '../../constants'
import { useState } from 'react'
import './OpenWebPage.scss'

export default function OpenWebPage() {
  const [webUrl, setWebUrl] = useState('https://www.tutorialrepublic.com/')
  const [mailUrl, setMailUrl] = useState(
    'mailto:?subject=%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%0A%0A%D0%AF%20%D0%BD%D0%B0%D1%88%D0%B5%D0%BB(%D0%B0)%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D1%83%D1%8E%20%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8E%20%D0%B8%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D0%B5%D0%B9%20%D1%81%20%D0%B2%D0%B0%D0%BC%D0%B8.%0A%D0%92%D0%BE%D1%82%20%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0%20%3A%20https%3A%2F%2Fexpress.itc.itcloud.io%2Fgroups%2Ftsentr-informatsionnyih%2Fpost%2Fentry%2F161.%0A'
  )

  const handleWebUrlChange = (event: any) => {
    setWebUrl(event.target.value)
  }

  const handleMailUrlChange = (event: any) => {
    setMailUrl(event.target.value)
  }

  return (
    <>
      <div className="feature-page">
        <FeaturePageHeader name={OPEN_WEB_PAGE_FEATURE.name} />
        <span className="feature-page__title">Web URL</span>
        <div className="open-web-page">
          <input className="input" type="url" defaultValue={webUrl} onChange={handleWebUrlChange} />
          <a className="open-web-page__link" href={webUrl}>
            {webUrl}
          </a>
        </div>
        <span className="feature-page__title">Mailto URL</span>
        <div className="open-web-page">
          <input className="input" type="url" defaultValue={mailUrl} onChange={handleMailUrlChange} />
          <a className="open-web-page__link" href={mailUrl}>
            {mailUrl}
          </a>
        </div>
      </div>
    </>
  )
}
