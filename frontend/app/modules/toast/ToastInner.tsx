import React from 'react'
import { styled } from 'styled-components'

const Div = styled.div`
  border: 0px;
  max-height: 1px;
  height: 1px;
  width: 100%;
  position: relative;

  input {
    border: 0px;
    max-height: 1px;
    height: 1px;
    background: transparent;
    color: transparent;
  }
`

const ToastInner = ({ text }: { text: string }) => (
  <>
    {text}
    <Div>
      <input type="text" value={text} />
    </Div>
  </>
)

export default ToastInner
