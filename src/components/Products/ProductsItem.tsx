import {FC} from 'react'
import { IProduct } from '../../types/types'
import s from './Products.module.scss'



const ProductsItem:FC<IProduct> = ({image, rating,description,title,price}) => {
    
    
  return (
    <div className={s.products_item}>
        <img src={image} alt="" className={s.products_item_img} />
        <span className={s.products_item_price}>{price}</span>
        <button className={s.products_item_add}>+</button>
        <p className={s.products_item_rating}>{rating}</p>
        <p className={s.products_item_title}>{title}</p>
        <p className={s.products_item_text}>{description}</p>
    </div>
  )
}

export default ProductsItem