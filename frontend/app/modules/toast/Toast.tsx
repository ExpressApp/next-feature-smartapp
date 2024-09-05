import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { ToastContainer } from 'react-toastify'
import { createGlobalStyle, styled } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import { useStore } from '../../hooks/useStore'

const GlobalStyle = createGlobalStyle`
.Toastify__toast-container--bottom-left{
  max-width: 360px;
  margin-left: 10px;
}

.Toastify__toast-container--bottom-left .Toastify__toast {
  margin-bottom: 10px;
}
`

const Input = styled.input`
  border: 0;
  padding: 0;
  margin: 0;
  display: block;
  height: 1px;
  max-height: 1px;
  background: transparent;
  color: transparent;
`

const Toast: FC = () => {
  const { toastStore: store } = useStore()

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Input value={store.lastText} id="toast-text" />
    </>
  )
}

export default observer(Toast)
