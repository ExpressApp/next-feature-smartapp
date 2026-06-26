import React, { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import Button from '../../components/Button'
import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

const IosPinchToZoomPage: FC = () => {
  const { iosPinchToZoomStore: store } = useStore()

  const handleEnable = () => store.setAllowIosSwipe(true)

  const handleDisable = () => store.setAllowIosSwipe(false)

  return (
    <FeaturePage>
      <FeatureHeader name="Зум смартапки на iOS" />
      <Buttons>
        <Button onClick={handleEnable} id="subscribe-btn" title="Разрешить" />
        <Button onClick={handleDisable} id="unsubscribe-btn" title="Запретить" />
      </Buttons>
    </FeaturePage>
  )
}

export default observer(IosPinchToZoomPage)
