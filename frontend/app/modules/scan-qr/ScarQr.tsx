import React, { useEffect, useRef } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

export default function ScanQR({
  onScanSuccess,
  onScanFailure,
}: {
  onScanSuccess: (text: string, result: object) => void
  onScanFailure: (error: string) => void
}) {
  const config = useRef({
    fps: 10,
    qrbox: 250,
    disableFlip: true,
  })

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner('reader', config.current, false)
    html5QrcodeScanner.render(onScanSuccess, onScanFailure)

    return () => {
      html5QrcodeScanner.clear()
    }
  }, [])

  return <div id="reader" />
}
