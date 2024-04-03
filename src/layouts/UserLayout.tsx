import {FC, ReactNode} from 'react'
import User from '../components/User/User'

interface IUserLayoutProps {
    children: ReactNode
}

const UserLayout:FC<IUserLayoutProps> = ({children}) => {
  return (
    <div className="main">
        <User/>
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default UserLayout