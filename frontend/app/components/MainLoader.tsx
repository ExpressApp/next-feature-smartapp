import React, { FC } from 'react'
import styled from 'styled-components'

const Loader = styled.div`
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

const Spinner = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`

const MainLoader: FC = () => {
  return (
    <Loader id="main-loader">
      <Spinner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
      <FakeInput id="main-loader-input" />
    </Loader>
  )
}

export default MainLoader
