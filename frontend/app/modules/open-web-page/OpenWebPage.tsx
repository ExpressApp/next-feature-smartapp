import React, { FC, useState } from 'react'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import Input from '../../components/Input'
import styled from 'styled-components'

const LinkStyled = styled.a`
  color: #4799e3;
  padding-top: 8px;
  padding-bottom: 32px;
  max-width: 100%;
  display: block;
  word-wrap: break-word;
`

const OpenWebPage: FC = () => {
  const [url, setUrl] = useState('https://www.tutorialrepublic.com/')
  const [email, setEmail] = useState(
    'mailto:?subject=%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D0%B0%D1%8F%20%D0%' +
      'BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F&body=%D0%97%D0%B4%D1%80%D0' +
      '%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%0A%0A%D0%AF%20%D0%BD%D0%B0%D1' +
      '%88%D0%B5%D0%BB(%D0%B0)%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D1%83%D1' +
      '%8E%20%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8E%20%D0%B8%20%D1%85' +
      '%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20' +
      '%D0%B5%D0%B9%20%D1%81%20%D0%B2%D0%B0%D0%BC%D0%B8.%0A%D0%92%D0%BE%D1%82%20%D1%81%D1%81' +
      '%D1%8B%D0%BB%D0%BA%D0%B0%20%3A%20https%3A%2F%2Fexpress.itc.itcloud.io%2Fgroups%2Ftsentr' +
      '-informatsionnyih%2Fpost%2Fentry%2F161.%0A'
  )

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

  return (
    <FeaturePage>
      <FeatureHeader name="Открытие ссылок" />
      Ссылка на сайт
      <Input onChange={handleUrlChange} value={url} id="url" />
      <LinkStyled href={url}>{url}</LinkStyled>
      Email ссылка
      <Input onChange={handleEmailChange} value={email} id="email" />
      <LinkStyled href={email}>{email}</LinkStyled>
    </FeaturePage>
  )
}

export default OpenWebPage
