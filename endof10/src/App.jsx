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
          </div>
        </div>
  )
}

export default App
