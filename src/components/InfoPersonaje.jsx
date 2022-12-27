import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../Redux/Action'
import s from '../Styles/infoPersonaje.module.css';
export  const Home = () => {
  let state = useSelector(state => state)
  const dispatch = useDispatch()
  if(state.fill){
    return (
      <div className={s.ContainerSup}>
      <div className={s.Container}>
         
        <div>
          <img src={state.characterDetails.data.results[0].thumbnail.path+'.jpg'} alt="" className={s.Image}/>
        </div>

        <div className={s.containerText}>
          <h2>{state.characterDetails.data.results[0].name}</h2>
          <p className={s.Description}>{state.characterDetails.data.results[0].description}</p>
        </div>
      </div>
      <Link to={`/list/${state.characterDetails.data.results[0].id}`}><button onClick = {()=>dispatch(actions.getAllComics(state.characterDetails.data.results[0].id))} className = {s.btn}>Ver</button></Link>
      </div>
    )
  }else{
    return(
      <div>
        <h3>Sin Resultados</h3>
      </div>
    )
  }
}
export default Home