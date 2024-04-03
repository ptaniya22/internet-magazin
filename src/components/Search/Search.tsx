import { FC, useState, FormEvent }  from 'react'
import s from './Search.module.scss'
import { searchIcon, closeIcon  } from '../../utils/imgExport'
import filterStore from '../../store/filterStore'

export const Search: FC = () => {
  
  const [value, setValue] = useState('')
  const { setSearchValue } = filterStore()
  
  const confirm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchValue(value)
  }
  
  const reset = () => {
    setValue('')
    setSearchValue('')
  }
  
  return (
    <form  className={s.search} onSubmit={(event) => confirm(event)}>
      <div className={s.search_box}>
        <img src={searchIcon} alt="" className={s.search_box_icon} />
        <input 
          type="text" 
          className={s.search_box_input}
          placeholder="Введите блюдо или состав"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        {value && <img onClick={() => reset()} src={closeIcon} alt="" className={s.search_box_close}/>}
      </div>
      <button className={s.search_btn}>Поиск</button>
    </form>
  )
}
