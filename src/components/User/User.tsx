import {FC} from 'react'
import s from './User.module.scss'
import { userPhoto, cartIcon, userIcon, menuIcon, logoutIcon } from '../../utils/imgExport'
import { Link, useNavigate } from 'react-router-dom'
import CustomBtn from '../UI/CustomBtn'
import userStore from '../../store/userStore'
import UserSkeleton from './UserSkeleton'

const links = [
  { url: '/', name: 'Меню', icon: menuIcon },
  { url: '/cart', name: 'Корзина', icon: cartIcon },
  { url: '/profile', name: 'Профиль', icon: userIcon },
]

const User:FC = () => {
  
  const { logout, user } = userStore()
  const navigate = useNavigate()
  
  const logoutUser = () => {
    logout()
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('access_token')
    navigate('/login')
  }
  
  let userImg = user?.avatar ? import.meta.env.VITE_IMG_URL + user.avatar : userPhoto 

  return (
   <div className={s.user}>
    { user ? (
      <>
      <div className={s.user_info}>
          <img src={userImg} alt="" className={s.user_info_img} />
          <h2 className={s.user_info_name}>{user?.username}</h2>
          <a href="#" className={s.user_info_email}>{user?.email}</a>
      </div>
      <ul className={s.user_list}>
        {links.map((link) => (
          <Link to={link.url} key={link.url} className={s.user_list_link}>
            <img src={link.icon} alt="" />
            <span>{link.name}</span>
          </Link>
        ))}
      </ul>
      <CustomBtn
        onClick={logoutUser}
        text="Выйти"
        icon={logoutIcon}
        width={120}
        height={43}
        mt="auto"
      />
      </>
    ) : <UserSkeleton/> }
  
   </div>
  )
}

export default User