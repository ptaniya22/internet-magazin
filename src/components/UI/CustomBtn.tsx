import {FC} from 'react'
import s from './CustomBtn.module.scss'

interface ICustomBtnProps {
    text: string;
    icon?: string;
    width: number;
    height: number;
    mt?: string;
    onClick?: () => void;
}

const CustomBtn:FC<ICustomBtnProps> = ({text,icon,width,height,mt, onClick}) => {
  return (
    <button
        onClick={onClick}
        className={s.btn} 
        style={{width:width, height: height, marginTop: mt}}
    >
        <img src={icon} alt="" />
        <span>{text}</span>
    </button>
  )
}

export default CustomBtn