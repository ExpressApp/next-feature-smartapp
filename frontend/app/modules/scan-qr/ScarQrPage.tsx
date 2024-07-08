import React, { FC, useState } from 'react'
import FeatureHeader from '../../components/FeatureHeader'
import FeaturePage from '../../components/FeaturePage'
import ScanQR from './ScarQr'

const ScanQrPage: FC = () => {
  const [decodedText, setDecodedText] = useState('')
  const [decodedResult, setDecodedResult] = useState<object | null>(null)

  const handleOnScanSuccess = (text: string, result: object) => {
    setDecodedText(text)
    setDecodedResult(result)
  }

  const handleOnScanFailure = (err: string) => {
    console.warn(`Code scan error: ${err}`)
  }

  return (
    <FeaturePage>
      <FeatureHeader name="Сканирование QR" />
      <ScanQR onScanSuccess={handleOnScanSuccess} onScanFailure={handleOnScanFailure} />
      {decodedText && (
        <>
          <p>Текст:</p>
          <div>{decodedText}</div>
        </>
      )}
      {decodedResult && (
        <>
          <p>Данные:</p>
          <div>{JSON.stringify(decodedResult)}</div>
        </>
      )}
    </FeaturePage>
  )
}

export default ScanQrPage
