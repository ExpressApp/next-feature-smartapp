import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const PageStyled = styled.div`
  padding: 10px 20px;
`

interface Props {
  children: ReactNode
}

const FeaturePage: FC<Props> = ({ children }) => {
  return <PageStyled>{children}</PageStyled>
}

export default FeaturePage
