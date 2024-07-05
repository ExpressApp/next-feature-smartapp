import React, { FC, useEffect, useRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import JSONEditor from 'jsoneditor'
import CopyIcon from '../assets/copy.svg'
import 'jsoneditor/dist/jsoneditor.min.css'
import { createGlobalStyle } from 'styled-components'

const EditorStyle = createGlobalStyle`
.json-viewer {
  position: relative;
  border: 1px solid var(--light-grey);
}
.json-viewer .jsoneditor-menu {
  background: var(--grey);
  border-bottom: 1px solid var(--light-grey);
}
.jsoneditor {
  border: none;
}
.jsoneditor-menu > button,
.jsoneditor-menu > .jsoneditor-modes > button {
  color: white;
}
.jsoneditor-menu > .copy-to-clipboard {
  background-image: none;
}
`

const JsonViewer: FC<{ data: object; id?: string }> = ({ data, id }) => {
  const container = useRef<HTMLDivElement>(null)

  const copyToClipboardJson = (obj: object) => {
    const container = document.createElement('textarea')

    container.innerHTML = JSON.stringify(obj, null, '  ')
    document.body.appendChild(container)

    container.select()
    document.execCommand('copy')
    document.body.removeChild(container)
  }

  useEffect(() => {
    if (!container) return

    const editor = new JSONEditor(container.current, { mode: 'view', enableTransform: true })

    if (data) editor.set(data)

    const button = document.createElement('button')
    button.className = 'copy-to-clipboard'
    button.innerHTML = ReactDOMServer.renderToStaticMarkup(<CopyIcon height="22" width="22" />)
    button.addEventListener('click', () => copyToClipboardJson(data))
    button.setAttribute('title', 'Copy To Clipboard')

    const menu = document.querySelector('.jsoneditor-menu')
    const search = document.querySelector('.jsoneditor-menu .jsoneditor-search')

    menu?.insertBefore(button, search)

    return () => editor.destroy()
  }, [data])

  return (
    <>
      <EditorStyle />
      <div className="json-viewer" ref={container} id={id} />
    </>
  )
}

export default JsonViewer
