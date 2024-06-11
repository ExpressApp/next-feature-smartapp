import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../../../assets/arrow-left.svg'
import './FeaturePageHeader.scss'

export default function FeaturePageHeader({ name }) {
  return (
    <div className='feature-page__header'>
      <Link className='btn--arrow-left' to='/' id='back-nav-link'>
        <ArrowLeft className='icon--arrow-left' height={24} width={24} />
      </Link>
      <div className='feature-page__info'>
        <span className='feature-page__title'>{name} method</span>
      </div>
    </div>
  )
}
