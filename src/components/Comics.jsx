import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../Redux/Action'
import s from '../Styles/Comics.module.css'

export const Comics = (props) => {
    
    const dispatch = useDispatch()
  return (
    <Link to={`/details/${props.id}`} onClick={()=>dispatch(actions.getComicsDetails(props.id))}>
    <div className={s.Container}>
        
        <div>
            <img src={props.img+'.jpg'} alt={props.name} className ={s.image}/>
        </div>
        <div>
            
        </div>
    </div>
    </Link>
  )
}

export default Comics