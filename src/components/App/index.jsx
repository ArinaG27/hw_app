import { words } from '../../data/words'
import CardsContainer from '../CardsContainer';
import Triggers from '../Triggers';
import AddForm from '../AddForm';
import { useState } from 'react';

function App() {

  const [ cards, setCards ] = useState(words);

  const change_to_de = () => {
    setCards(cards.map(el => {
      el.lang = 'de'
      return el
    }))
  }

  const change_to_rus = () => {
    setCards(cards.map(el => {
      el.lang = 'rus'
      return el
    }))
  }

  const change_lang = (id) => {
    setCards(cards.map(el => {
      if(el.id === id){
        el.lang = el.lang === 'rus' ? 'de' : 'rus'
      }
      return el
    }))
  }

  const add_card = (de, rus) => setCards([
    ...cards,
    {
      id: Date.now(),
      de,
      rus,
      lang: 'de'
    }
  ])

  return (
    <div>
      <AddForm add_card={add_card} />
      <CardsContainer card_words={cards} change_lang={change_lang} />
      <Triggers change_de={change_to_de} change_rus={change_to_rus} />
    </div>
  );
}

export default App;