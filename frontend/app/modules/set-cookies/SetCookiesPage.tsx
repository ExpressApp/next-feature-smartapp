import React, { FC, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'
import JsonViewer from '../../components/JsonViewer'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const generateCookie = (n: number) => {
  return `COOKIE${n}=VALUE${n}; SameSite=none; Secure; Path=/; domain=next-feature-smartapp-1.ext.ccstest.ru`
}

const SetCookiesPage: FC = () => {
  const { setCookiesStore: store } = useStore()
  const [cookies, setCookies] = useState([generateCookie(1), generateCookie(2)])
  const [url, setUrl] = useState('https://next-feature-smartapp-1.ext.ccstest.ru/smartapp_files/static/api/cookies')

  const handleAddCookie = () => setCookies([...cookies, generateCookie(cookies.length + 1)])
  const handleChangeCookie = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCookies = cookies.slice()
    newCookies[index] = event.target.value
    setCookies(newCookies)
  }
  const handleRemoveCookie = (index: number) => () => setCookies(cookies.filter((_, i) => i !== index))
  const handleSubmitCookie = () => store.setCookies(cookies.map(value => ({ value })))

  const handleChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value)
  const handleSubmitUrl = () => store.getCookies(url)

  return (
    <FeaturePage>
      <FeatureHeader name="Установка cookie на другой веб ресурс" />
      Установка cookie
      {cookies.map((cookie, index) => (
        <Row key={index}>
          <Input onChange={handleChangeCookie(index)} value={cookie} id={`cookie${index + 1}`} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={handleRemoveCookie(index)} id={`plus${index + 1}`} title="−" />
        </Row>
      ))}
      <br />
      <Row>
        <Button onClick={handleSubmitCookie} id="submit1" title="Установить" />
        <Button onClick={handleAddCookie} id="plus" title="＋" />
      </Row>
      <br />
      <br />
      Проверка cookie
      <Input onChange={handleChangeUrl} value={url} id="url" />
      <Button onClick={handleSubmitUrl} id="submit2" title="Проверить" />
      <br />
      <br />
      {store.response && <JsonViewer data={store.response} id="response" />}
    </FeaturePage>
  )
}

export default observer(SetCookiesPage)
