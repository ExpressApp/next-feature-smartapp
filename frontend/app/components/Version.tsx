import React from 'react'
import packageInfo from '../../package.json'
import styled from 'styled-components'

const VerDiv = styled.div.attrs({ className: 'version' })`
  position: fixed;
  bottom: 2px;
  right: 2px;
  background: var(--grey);
  border-radius: 3px;
  border: 1px solid var(--light-grey);
  line-height: 20px;
  font-size: 12px;
  align-self: center;
  color: white;
  padding: 2px 5px;
`

export default function Version() {
  return <VerDiv id="version">SmartApp v{packageInfo.version}</VerDiv>
}
