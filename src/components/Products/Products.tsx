import {FC, useEffect} from 'react'
import { useGetProducts } from '../../services/products'
import filterStore from '../../store/filterStore'
import { IProduct } from '../../types/types'
import { Search } from '../Search/Search'
import Sort from '../Sort/Sort'
import s from './Products.module.scss'
import ProductsItem from './ProductsItem'
import ProductsSkeleton from './ProductsSkeleton'

const Products: FC = () => {
    
  const  { sortValue, searchValue  } = filterStore()
    
  const { data } = useGetProducts({sort: sortValue,search: searchValue})
    
  const products = data?.results.map((item:IProduct) => <ProductsItem key={item.id}{...item}/>)
  const skeletons = [... new Array(6)].map((_,i) => <ProductsSkeleton key={i}/>)
      
  return (
    <div className={s.products}>
        <div className={s.products_filter}>
            <div className={s.products_filter_left}>
                <h1 className={s.products_filter_title}>Меню</h1>
                <Sort/>
            </div>
            <Search/>
        </div>
        <div className={s.products_list}>
           {data ? products : skeletons}
        </div>
    </div>
  )
}

export default Products