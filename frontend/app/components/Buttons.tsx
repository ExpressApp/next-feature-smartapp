import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

type Props = {
  children: ReactNode
}

const Buttons: FC<Props> = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Buttons
