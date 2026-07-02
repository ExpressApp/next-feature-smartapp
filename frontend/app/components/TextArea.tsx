import React, { FC } from 'react'
import styled from 'styled-components'

const TextAreaStyled = styled.textarea`
  padding: 12px 20px;
  width: calc(100% - 40px);
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  font-size: ${props => Math.round(props.theme.fontScale * 12)}px;
  background-color: var(--input-bg);
  color: var(--font-color);
`

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  id?: string
  value?: string | number
  disabled?: boolean
  rows?: number
}

export const TextArea: FC<Props> = props => {
  return <TextAreaStyled {...props} />
}
