import api from './api'
import { useQuery, useMutation } from '@tanstack/react-query'
import { ILogin, IRegister } from '../types/types'

export const useCurrentQuery = () => {
    const access_token = localStorage.getItem('access_token') 
    return useQuery(['current'], () => api.get('auth/users/profile'), {
        enabled: !!access_token,
        select: (response) => response.data 
    })
}

export const useRegisterMutation = () => {
    return useMutation((userData: IRegister) => api.post('auth/register', userData))
}

export const useLoginMutation = () => {
    return useMutation((userData: ILogin) => api.post('auth/login', userData), {
        onSuccess: ({data}) => {
            if(data && data.access) {
                console.log('Работает');
                localStorage.setItem('access_token', data.access)
                localStorage.setItem('refresh_token', data.refresh)
            } 
        }
    })
}



