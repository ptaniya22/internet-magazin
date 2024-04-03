import { FC, ReactNode } from 'react'
import logoIcon from '../assets/images/logo.svg'

interface IAuthLayoutProps {
  children: ReactNode
}

const AuthLayout:FC<IAuthLayoutProps> = ({children}) => {
  return (
    <div className="main h-100vh">
        <div className="logo">
            <img src={logoIcon} alt="" className="logo_img"/>
        </div>
        {children}
    </div>
  )
}

export default AuthLayout