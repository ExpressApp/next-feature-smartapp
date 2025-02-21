import React, { FC } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
`

const RadioButtonStyled = styled.input.attrs({ className: 'input' })`
  width: 16px;
  height: 16px;
`

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  value?: string | number
  disabled?: boolean
  checked?: boolean
  label: string
}

const RadioButton: FC<Props> = props => {
  return (
    <Div key={props.id}>
      <RadioButtonStyled type="radio" {...props} />
      <label htmlFor={props.id}>{props.label}</label>
    </Div>
  )
}

export default RadioButton
