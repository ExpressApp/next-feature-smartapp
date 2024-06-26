import FeaturePageHeader from '../ui/feature-page-header/FeaturePageHeader'
import { SCAN_QR_FEATURE } from '../../constants'
import ScanQR from '../scan-qr/ScanQR'
import { useState } from 'react'

export function ScanQRPage() {
  const [decodedText, setDecodedText] = useState(null)
  const [decodedResult, setDecodedResult] = useState(null)

  const handleOnScanSuccess = (text: string, result: any) => {
    setDecodedText(text)
    setDecodedResult(result)
    console.log(`Code matched: ${text}`, result)
  }

  const handleOnScanFailure = err => {
    console.warn(`Code scan error: ${err}`)
  }

  return (
    <div className="feature-page">
      <FeaturePageHeader name={SCAN_QR_FEATURE.name} />
      <ScanQR onScanSuccess={handleOnScanSuccess} onScanFailure={handleOnScanFailure} />
      {decodedText && (
        <>
          <p>Decoded text:</p>
          <div>{decodedText}</div>
        </>
      )}
      {decodedResult && (
        <>
          <p>Decoded result:</p>
          <div>{JSON.stringify(decodedResult)}</div>
        </>
      )}
    </div>
  )
}
