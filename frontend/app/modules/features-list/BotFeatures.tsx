import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BotFeaturesProps } from './features.types'
import 'material-icons/iconfont/material-icons.css'

const StyledLink = styled(Link).attrs({ className: 'feature-smartapp__menu-item' })`
  padding-left: 20px;
  font-size: 16px;
  line-height: 36px;
  text-decoration: none;
  color: var(--font-color);
  cursor: pointer;

  & .material-icons {
    position: relative;
    bottom: -3px;
    font-size: 18px;
    padding-right: 8px;
  }

  &:first-child {
    padding-top: 20px;
  }

  &:hover {
    color: var(--blue);
  }

  &:active {
    color: var(--light-blue);
  }
`

const Title = styled.div`
  padding: 20px 0 10px 20px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.8;
`

const BotFeatures: FC<BotFeaturesProps> = ({ features }) => {
  return (
    <>
      <Title>Методы бота</Title>
      {!!features.length &&
        features.map(item => (
          <StyledLink key={item.method} to={item.method}>
            <span className="material-icons">send</span>
            {item.name}
          </StyledLink>
        ))}
      <StyledLink to="guaranteed-delivery">
        <span className="material-icons">delivery_dining</span>
        Событие с гарантированной доставкой
      </StyledLink>
    </>
  )
}

export default BotFeatures
