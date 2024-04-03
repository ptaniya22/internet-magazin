import { useState, FC } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '../components/UI/CustomInput'
import { IRegister} from '../types/types'
import { useRegisterMutation } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import { errorMessage } from '../utils/errorMessage'

const Register:FC = () => {
  
  const navigate = useNavigate()
  
  const registerMutation = useRegisterMutation()
  const [error, setError] = useState('')
  
  const { 
    register, // позволит регистрировать наши поля
    formState: {
      errors,
      isValid
    }, // объект у которого есть свойства для ошибок
    handleSubmit, 
    reset, // функция для сброса формы
   } = useForm<IRegister>({
    mode: 'onBlur'
   })
  
   
   const registerUser: SubmitHandler<IRegister> = async(data) => {
      try {
        await registerMutation.mutateAsync(data)
        console.log('Registration successful!');
        setError('')
        navigate('/login')
        
      } catch (error) {
        setError('')
        setError(errorMessage(error))
        console.log(error);
        
      }
      
      reset()
      
   }
  
  return (
    <>
        <AuthLayout>
          <div className="f_b">
            <div className="f_b_b">
              <h1 className="title">Регистрация</h1>
              <form className="form" onSubmit={handleSubmit(registerUser)}>
                <CustomInput
                  holder='Username'
                  label='Ваш Username'
                  type="text"
                  errors={errors?.username}
                  register={register('username', {
                    required: 'Поля обязательное к заполнению',
                    minLength: {
                      value: 3,
                      message: 'Минимум 3 символа'
                    }
                  })}
                />
                <CustomInput
                  holder='email'
                  label='Ваш email'
                  type="email"
                  errors={errors?.email}
                  register={register('email', {
                    required: 'Поля обязательное к заполнению',
                  })}
                />
                <CustomInput
                  holder='Пароль'
                  label='Ваш пароль'
                  type="password"
                  errors={errors?.password}
                  register={register('password', {
                    required: 'Поля обязательное к заполнению',
                    minLength: {
                      value: 8,
                      message: 'Минимум 8 символов'
                    }
                  })}
                />
                <CustomInput
                  holder='Пароль'
                  label='Подтвердите пароль'
                  type="password"
                  errors={errors?.password2}
                  register={register('password2', {
                    required: 'Поля обязательное к заполнению',
                    minLength: {
                      value: 8,
                      message: 'Минимум 8 символов'
                    }
                  })}
                />
                <button disabled={!isValid} className="form_btn">Зарегистрироваться</button>
              </form>
              <div className="form_info">
                {error && <h3 className='form_info_error'>{error}</h3>}
                <p className="form_info_text">Есть акканут?</p>
                <Link to="/login" className='form_info_link'>Войти</Link>
              </div>
            </div>
          </div>
        </AuthLayout>
    </>
  )
}

export default Register


