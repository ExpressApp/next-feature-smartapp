import React, { FC } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
`

const CheckboxStyled = styled.input.attrs({ className: 'input' })`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`

type Props = {
  id?: string
  name?: string
  disabled?: boolean
  checked?: boolean
  label: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<Props> = props => {
  return (
    <Div key={props.id}>
      <CheckboxStyled type="checkbox" {...props} />
      <label htmlFor={props.id}>{props.label}</label>
    </Div>
  )
}

export default Checkbox
