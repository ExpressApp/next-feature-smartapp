import './Version.scss'
import { version } from '../../../../package.json'

export default function Version() {
  return (
    <div className="version" id="version">
        SmartApp v{version}
    </div>
  )
}

