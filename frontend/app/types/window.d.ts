import { Root } from 'react-dom/client'

declare global {
  interface Window {
    __REACT_ROOT__?: Root
  }
}
