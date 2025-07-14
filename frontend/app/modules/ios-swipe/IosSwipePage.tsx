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

const IosSwipePage: FC = () => {
  const { iosSwipeStore: store } = useStore()

  const handleSubscribeIosSwipe = () => store.subscribeIosSwipeEvent()

  const handleUnsubscribeIosSwipe = () => store.unsubscribeIosSwipeEvent()

  const handleToggleSwipe = () => store.setAllowIosSwipe(!store.allowIosSwipe)

  return (
    <FeaturePage>
      <FeatureHeader name="Свайп на iOS" />
      <input
        className="checkbox"
        checked={store.allowIosSwipe}
        type="checkbox"
        id="allow-ios-swipe"
        name="allow-ios-swipe"
        onChange={handleToggleSwipe}
      />
      <label htmlFor="allow-ios-swipe">Свайп включен</label>
      <br />
      <br />
      <br />
      Подписка на получение свайпов
      <Buttons>
        <Button onClick={handleSubscribeIosSwipe} id="subscribe-btn" title="Подписаться" />
        <Button onClick={handleUnsubscribeIosSwipe} id="unsubscribe-btn" title="Отписаться" />
      </Buttons>
    </FeaturePage>
  )
}

export default observer(IosSwipePage)
