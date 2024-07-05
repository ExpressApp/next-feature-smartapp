import React from 'react'
import styled from 'styled-components'
import BotxIcon from '../../assets/botx-icon.svg'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
`

const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
`

const Text = styled.span`
  padding-left: 16px;
  font-size: 24px;
  color: var(--font-color);
`

const Icon = styled(BotxIcon)`
  color: var(--blue);
`

const FeaturesHeader = () => {
  return (
    <Header>
      <Content>
        <Icon height={20} width={20} />
        <Text>Next Feature Smartapp</Text>
      </Content>
    </Header>
  )
}

export default FeaturesHeader
