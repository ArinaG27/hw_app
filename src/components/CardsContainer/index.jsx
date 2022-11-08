import React from 'react'
import Card from '../Card'
import s from './index.module.css'

export default function CardsContainer({ card_words, change_lang }) {
  return (
    <div className={s.cards_container}>
      {
        card_words.map(el => <Card key={el.id} {...el} change_lang={change_lang} />)
      }
    </div>
  )
}