import React, { FC } from 'react'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import { BotCommandPageProps } from './bot-command.types'
import FileCommand from './FileCommand'
import TextCommand from './TextCommand'

const BotCommandPage: FC<BotCommandPageProps> = ({ botFeature }) => {
  const isFileMethod = botFeature.method.includes('file')

  return (
    <FeaturePage>
      <FeatureHeader name={botFeature.name} />
      {isFileMethod ? <FileCommand botFeature={botFeature} /> : <TextCommand botFeature={botFeature} />}
    </FeaturePage>
  )
}

export default BotCommandPage
