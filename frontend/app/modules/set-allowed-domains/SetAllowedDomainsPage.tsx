import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'
import { observer } from 'mobx-react'

const SetAllowedDomainsPage: FC = () => {
  const { setAllowedDomainsStore: store } = useStore()
  const [url, setUrl] = useState('nextcloud.ccsteam.ru')

  const handleChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value)
  const handleSubmitUrl = () => store.setAllowedNavigationDomains([url])

  return (
    <FeaturePage>
      <FeatureHeader name="Открытие сайта без перехода в браузер" />
      URL
      <Input onChange={handleChangeUrl} value={url} id="url" />
      <Button onClick={handleSubmitUrl} id="submit" title="Открыть" />
    </FeaturePage>
  )
}

export default observer(SetAllowedDomainsPage)
