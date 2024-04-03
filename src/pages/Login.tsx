import {FC, useState} from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { Link } from 'react-router-dom'
import CustomInput from '../components/UI/CustomInput'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ILogin } from '../types/types'
import { useLoginMutation } from '../services/auth'
import { errorMessage } from '../utils/errorMessage'


const Login:FC = () => {
  
  const loginMutation = useLoginMutation()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  
  const { 
    register, 
    formState: {
      errors,
      isValid
    }, 
    handleSubmit, 
    reset, 
   } = useForm<ILogin>({
    mode: 'onBlur'
   })
  
   
   const loginUser: SubmitHandler<ILogin> = async(data) => {
      try {
        await loginMutation.mutateAsync(data)
        console.log('Login Successfull');
        setError('')
        navigate('/')
      } catch (error) {
        setError('')
        setError(errorMessage(error, 'login'))
        console.log(error);
        
      }
      
   }
  
  return (
    <>
      <AuthLayout>
      <div className="f_b">
            <div className="f_b_b">
              <h1 className="title">Вход</h1>
              <form className="form" onSubmit={handleSubmit(loginUser)}>
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
                <button className="form_btn">Вход</button>
              </form>
              <div className="form_info">
                {error && <h3 className='form_info_error'>{error}</h3>}
                <p className="form_info_text">Нет акканута? </p>
                <Link to="/register" className='form_info_link'>Зарегистрироваться</Link>
              </div>
            </div>
          </div>
      </AuthLayout>
    </>
  )
}

export default Login