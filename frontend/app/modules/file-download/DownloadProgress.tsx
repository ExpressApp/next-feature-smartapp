import React, { FC } from 'react'
import styled from 'styled-components'
import { formatBytes } from './file-download.helpers'

const Track = styled.div`
  margin-top: 16px;
  height: 8px;
  border-radius: 4px;
  background: var(--light-grey);
  overflow: hidden;
`

const Fill = styled.div<{ percent: number }>`
  height: 100%;
  width: ${props => props.percent}%;
  background: var(--blue);
  transition: width 0.2s linear;
`

const Text = styled.div`
  padding-top: 6px;
  font-size: ${props => Math.round(props.theme.fontScale * 12)}px;
`

export interface DownloadProgressProps {
  percent: number
  loadedBytes: number
  totalBytes: number
  completedFiles: number
  totalFiles: number
}

const DownloadProgress: FC<DownloadProgressProps> = ({
  percent,
  loadedBytes,
  totalBytes,
  completedFiles,
  totalFiles,
}) => {
  const safePercent = Math.min(100, Math.max(0, Math.round(percent)))

  return (
    <>
      <Track>
        <Fill
          percent={safePercent}
          id="download-progress"
          role="progressbar"
          aria-valuenow={safePercent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </Track>
      <Text id="download-progress-text">
        {formatBytes(loadedBytes)} из {formatBytes(totalBytes)} — {safePercent}% (файлов готово: {completedFiles} из{' '}
        {totalFiles})
      </Text>
    </>
  )
}

export default DownloadProgress
