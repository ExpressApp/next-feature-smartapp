import React, { FC, useEffect, useRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import CopyIcon from '../assets/copy.svg'
import 'jsoneditor/dist/jsoneditor.min.css'
import { createGlobalStyle } from 'styled-components'
// @ts-expect-error: no type declarations
import JSONEditor from 'jsoneditor/dist/jsoneditor-minimalist.min'

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
    button.id = 'btn-copy'

    const search = document.querySelector('.jsoneditor-menu .jsoneditor-search')
    const menu = document.querySelector('.jsoneditor-menu')
    menu?.insertBefore(button, search)

    const expand = document.querySelector('.jsoneditor-expand-all')
    if (expand) expand.id = 'btn-expand'

    const collapse = document.querySelector('.jsoneditor-collapse-all')
    if (collapse) collapse.id = 'btn-collapse'

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
