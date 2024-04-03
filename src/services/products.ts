import api from './api'
import { useQuery, useMutation } from '@tanstack/react-query'

interface IParams {
    sort: string;
    search: string;
}

export const useGetProducts = ({sort, search}: IParams ) => {
    
    return useQuery(['products', sort, search], () => api.get(`products?ordering=${sort}&search=${search}`), {
        select: (response) => response.data 
    })
}