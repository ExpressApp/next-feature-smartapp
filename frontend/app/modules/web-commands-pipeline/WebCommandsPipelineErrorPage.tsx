import React, { FC } from 'react'
import StopIcon from '../../assets/stop.svg'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import styled from 'styled-components'
import Button from '../../components/Button'

const Div = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0px 40px 0px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 20px;
    width: 50px;
    height: 50px;
  }
`

export const WebCommandsPipelineErrorPage: FC = () => {
  const handleSubmit = () => {
    location.hash = '/web-commands-pipeline'
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Авторизация на сайте" />
      <Div>
        <StopIcon />
        Пайплайн завершился ошибкой
      </Div>
      <Button onClick={handleSubmit} id="submit" title="Повторить" />
    </FeaturePage>
  )
}
