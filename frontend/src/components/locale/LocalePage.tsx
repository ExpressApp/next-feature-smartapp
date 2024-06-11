import { LOCALE_FEATURE } from '../../constants'
import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { useEffect, useState } from 'react'

export default function LocalePage() {
  const [locale, setLocale] = useState('')

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const locale = searchParams.get('locale') || 'unknown'

    setLocale(locale)

    return () => {}
  }, [setLocale])

  return (
    <div className="feature-page">
      <FeaturePageHeader name={LOCALE_FEATURE.name} />
      Локаль приложения
      <input id="locale-txt" value={locale} className="input" disabled />
    </div>
  )
}
