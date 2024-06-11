import './Version.scss'
import { version } from '../../../../package.json'

export default function Version() {
  return (
    <div className="version">
        SmartApp v{version}
    </div>
  )
}

