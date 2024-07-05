import React, { FC } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  margin-top: 10px;
  padding: 5px 20px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  line-height: 32px;
  text-transform: uppercase;
  background: #4799e3;
  border: none;
  border-radius: 3px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:active {
    outline: none;
    opacity: 0.5;
  }
  &:disabled {
    opacity: 0.5;
    background: var(--grey);
    cursor: not-allowed;
  }
`
const Icon = styled.span.attrs({ className: 'material-icons' })`
  position: relative;
  bottom: -3px;
  font-size: 18px;
  padding-right: 8px;
  margin-left: -10px;
`

type Props = {
  onClick?: () => void
  id?: string
  icon?: string
  title: string
  disabled?: boolean
}

const Button: FC<Props> = props => {
  return (
    <ButtonStyled onClick={props.onClick} type="button" id={props.id} disabled={props.disabled}>
      {props.icon && <Icon>{props.icon}</Icon>}
      {props.title}
    </ButtonStyled>
  )
}

export default Button
