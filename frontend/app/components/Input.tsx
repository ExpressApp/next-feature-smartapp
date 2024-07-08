import React, { FC } from 'react'
import styled from 'styled-components'

const InputStyled = styled.input.attrs({ className: 'input' })`
  padding: 12px 20px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid var(--light-grey);
  border-radius: 3px;
  font-size: 14px;
  color: var(--font-color);
  box-sizing: border-box;
  background-color: var(--input-bg);
`

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  value?: string | number
  disabled?: boolean
  type?: string
}

const Input: FC<Props> = props => {
  return <InputStyled {...props} />
}

export default Input
