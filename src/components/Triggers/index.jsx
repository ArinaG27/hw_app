import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'


export default function Triggers() {
  const { change_de, change_rus } = useContext(Context);

  return (

    <div className={s.triggers_container}>
      <button onClick={change_de}>De</button>
      <button onClick={change_rus}>Rus</button>
    </div>
  )
}