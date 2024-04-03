import {FC} from 'react'
import Products from '../components/Products/Products'
import UserLayout from '../layouts/UserLayout'

const Menu:FC = () => {
  return (
    <>
      <UserLayout>
       <Products/>
      </UserLayout>
    </>
  )
}

export default Menu