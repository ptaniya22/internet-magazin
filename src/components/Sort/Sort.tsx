import {FC, useState} from 'react'
import s from './Sort.module.scss'
import Select from 'react-select'
import filterStore from '../../store/filterStore'

const options = [
  { value: 'price', label: 'Цене' },
  { value: 'rating', label: 'Рейтингу' },
  { value: 'title', label: 'Названию' },
]

const Sort:FC = () => {
  
  const [selectedOption, setSelectedOption] = useState(null) 
  
  const { setSortValue } = filterStore() 
  
  const changeSelected = (selected:any) => {
    setSelectedOption(selected)
    setSortValue(selected.value)
  }
  
  const styles = {
    control: (provided: any) => ({
      ...provided,
      width: '200px',
      height: '20px',
      border: '1px solid rgb(239, 239, 239)', // добавляем стиль границы
      borderRadius: '10px', // добавляем стиль границы радиуса
      background: 'rgb(252, 252, 253)', // добавляем стиль фона
      color: 'rgb(154, 160, 180)',
      fontSize: '14px',
      fontWeight: '400',
    })
  };
  
  return (
    <Select
      value={selectedOption}
      options={options}
      placeholder="Сортировать по:"
      onChange={changeSelected}
      styles={styles}
    />
  )
}

export default Sort