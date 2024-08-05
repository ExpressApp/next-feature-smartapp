import React, { FC } from 'react'
import styled from 'styled-components'
import Icon from '../assets/clear-input.svg'

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

const CloseIcon = styled(Icon)`
  position: absolute;
  transform: translate(-150%, 102%);
  color: #767676;
  cursor: pointer;
`

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  value?: string | number
  disabled?: boolean
  type?: string
}

const Input: FC<Props> = props => {
  const handleClear = () => {
    const event = {
      target: {
        value: '',
      },
    } as React.ChangeEvent<HTMLInputElement>

    props.onChange?.(event)
  }

  return (
    <>
      <InputStyled {...props} />
      {!props.type && props.value && <CloseIcon onClick={handleClear} id={`${props.id}.field-clear`} />}
    </>
  )
}

export default Input
