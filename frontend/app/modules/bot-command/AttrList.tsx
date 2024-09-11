import React, { FC } from 'react'
import styled from 'styled-components'
import { AttrResponse } from './bot-command.types'

const AttrDiv = styled.div`
  display: flex;
  margin-bottom: 6px;

  & > svg {
    margin-left: 10px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
  }

  & > span {
    margin-right: 6px;
  }
`

const AttrList: FC<{ attrs: AttrResponse[] }> = ({ attrs }) => {
  return attrs.map(({ attr, value }, idx) => (
    <AttrDiv key={idx}>
      <span>{attr}:</span>
      <b>{value}</b>
    </AttrDiv>
  ))
}

export default AttrList
