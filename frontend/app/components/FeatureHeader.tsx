import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowLeft from '../assets/arrow-left.svg'

const Header = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
`

const Info = styled.div.attrs({ className: 'feature-page__title' })`
  padding-top: 4px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`

const Icon = styled(ArrowLeft)`
  color: var(--blue);

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`

export interface FeatureHeaderProps {
  name: string
}

const FeatureHeader: FC<FeatureHeaderProps> = ({ name }) => {
  return (
    <Header className="feature-page__header">
      <Link className="btn--arrow-left" to="/" id="back-nav-link">
        <Icon height={24} width={24} />
      </Link>
      <Info>{name}</Info>
    </Header>
  )
}

export default FeatureHeader
