import React from 'react'
import { ToastContainer } from 'react-toastify'
import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
.Toastify__toast-container--bottom-left{
  max-width: 360px;
  margin-left: 10px;
}

.Toastify__toast-container--bottom-left .Toastify__toast {
  margin-bottom: 10px;
}
`

const Toast = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
  </>
)

export default Toast
