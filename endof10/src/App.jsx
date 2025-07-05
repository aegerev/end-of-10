import React from 'react'
import { reasons } from './components/reasons.jsx'
import { ReasonCard } from './components/ReasonCard.jsx'
import './App.css'

function App() {
  return (
      <div>
        <h1>Ten Reasons To Switch To Linux Before/On/After October 14, 2025</h1>
          <div className='appContainer'>
            {reasons.map((reason) => (
              <ReasonCard
                key={reason.id}
                title={reason.title}
                date={reason.date}
                author={reason.author}
                description={reason.description}
                />
            ))}
            <p>Installing a new operating system may sound difficult, but the community behind the "End Of 10" is here to help! In towns and cities around the globe, there are people and places ready to lend you a hand or even install Linux for you. Many more helper groups get added every day. <br/> <br/>

            Find help near you at <a href='https://endof10.org/'>endof10.org</a>
            
            </p>
          </div>

        </div>
  )
}

export default App
