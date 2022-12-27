//  import React from 'react'
//  import Comics  from './Comics'
//  import { useDispatch, useSelector } from 'react-redux'
//  import s from '../Styles/ComicsList.module.css'
//     let state = useSelector(state => state)
// if(state.comics.hasOwnProperty('data')){
//    return (
//       <div>
//          <h2 className={s.titu}>Comics:</h2>
//          <div className={s.Container}>

//             {state.comics.data.results.map(c => <Comics key = {c.id} id = {c.id} img = {c.thumbnail.path} name = {c.title}/>)}
//          </div>
//      </div>
//    )
// }
// else{
//   <h3>hola</h3>
//  }

import React from "react";

export const ComicsList = () => {
  return (
    <div>
         <h2 className={s.titu}>Comics:</h2>
         <div className={s.Container}>
            {state.comics.data.results.map((c) => (
               <Comics key={c.id} id={c.id} img={c.thumbnail.path} name={c.title} />
            ))}
         </div>
    </div>
  );
};
