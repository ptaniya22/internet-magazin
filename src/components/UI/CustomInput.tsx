import {FC} from 'react'

interface ICustomInputProps {
    holder: string;
    label: string;
    type: string;
    errors: any;
    register: any;
}

const CustomInput:FC<ICustomInputProps> = ({holder, label, errors, register,type}) => {
  return (
    <div className="form_item">
        <label>
        {label}
        <input 
            type={type} 
            className="form_item_input"
            placeholder={holder}
            {...register}
        />
        </label>
        <div className="form_item_input_error">
        { errors && <h2>{errors?.message}</h2> }
        </div>
  </div>
  )
}

export default CustomInput