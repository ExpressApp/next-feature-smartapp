import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import JsonViewer from '../../components/JsonViewer'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'

const NfcPage: FC = () => {
  const { nfcStore: store } = useStore()

  const handleSubmit = () => {
    store.readTag()
  }

  return (
    <FeaturePage>
      <FeatureHeader name="NFC" />
      <Button onClick={handleSubmit} id="submit" title="Считать метку" icon="nfc" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(NfcPage)
