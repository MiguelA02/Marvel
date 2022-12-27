import React from 'react'
import { useState } from 'react'
import * as actions from '../Redux/Action'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import s from '../Styles/Buscador.module.css'
import image from './Marvelimg.png'
export const Home = () => {
    
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        setInput({
            name: e.target.value
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(actions.getDetails(input.name))
    }
  return (
    <div className={s.Container}>
        <div className={s.logoS}><img src={image} alt="" className={s.logo}/></div>
        <form onSubmit = {onSubmit} className={s.containerForm}>
            <input type="text" name='name' className ={s.Input}  onChange = {handleChange} value = {input.name} />
            <button type='submit' className={s.btn}>Search</button>
        </form>
    </div>
  )
}

export default Home
