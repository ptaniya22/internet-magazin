import { FC, useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useCurrentQuery } from '../services/auth'
import userStore from '../store/userStore'

const PrivateRoute:FC = () => {
    
    const access_token = localStorage.getItem('access_token') 
    const navigate = useNavigate()
    const setUser = userStore(state => state.setUser)
    const { data } = useCurrentQuery()
    
    
    useEffect(() => {
     if(!access_token) {
        navigate('/login')
     }
    }, [access_token, navigate])
    
    useEffect(() => {
        if(data) {
            setUser(data)  
        }
    }, [data])
    
    
    
  return <Outlet/>
}

export default PrivateRoute