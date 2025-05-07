import React, { FC } from 'react'
import styled from 'styled-components'
import Loader from './Loader'

const LoaderDiv = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  &__spinner {
    position: relative;
    width: 80px;
    height: 80px;
  }

  &__fake-input {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: 0;
    background-color: transparent;
  }
`

const FakeInput = styled.input`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: 0;
  background-color: transparent;
`

const MainLoader: FC = () => {
  return (
    <LoaderDiv id="main-loader">
      <Loader color="#fff" />
      <FakeInput id="main-loader-input" />
    </LoaderDiv>
  )
}

export default MainLoader
