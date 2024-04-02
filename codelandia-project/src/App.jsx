import Cards from './assets/components/Cards'
import Header from './assets/components/Header'
import './index.css'
import dataCards from '../data-cards.json'

function App() {
  return (
    <main>
      <Header />
      <div className='genericClass'>
        {dataCards.map((data) => (
          <Cards date={data.date} title={data.title} content={data.content} />
        ))}
      </div>
    </main>
  )
}

export default App
