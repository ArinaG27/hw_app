import React from 'react'
import s from './index.module.css'

export default function AddForm({ add_card }) {

  const submit = event => {
    event.preventDefault();
    const { rus, de } = event.target;
    add_card(de.value, rus.value);
    rus.value = '';
    de.value = '';
  }

  return (
    <form className={s.add_form} onSubmit={submit}>
      <input type='text' placeholder='Russian' name='rus' />
      <input type='text' placeholder='Deutsch' name='de' />
      <button>Add</button>
    </form>
  )
}