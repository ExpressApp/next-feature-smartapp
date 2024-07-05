import React, { FC, useLayoutEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { useStore } from '../../hooks/useStore'

const GlobalStyle = createGlobalStyle`
:root {
  --body-bg: #fff;
  --font-color: #000;
  --input-bg: #fff;

  --light-blue: #c4ddf4;
  --blue: #4799e3;
  --grey: #767676;
  --light-grey: #e2e2e2;
}

html[theme=dark] {
  --body-bg: #2c2c2c;
  --font-color: #fff;
  --input-bg: #616161;

  --light-blue: #c4ddf4;
  --blue: #4799e3;
  --grey: #767676;
  --light-grey: #e2e2e2;
}

html, body {
  padding: 0;
  margin: 0;
  font-family: OpenSans,-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
}

body {
  background-color: var(--body-bg);
  color: var(--font-color);
}
`

const Theme: FC = () => {
  const { themeStore: store } = useStore()

  useLayoutEffect(() => {
    store.setupTheme()
  }, [])

  return <GlobalStyle />
}

export default Theme
