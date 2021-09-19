import React, { useState } from 'react';
import './App.scss';
import Counter from './features/counter/Counter'
import CandidateList from './features/candidate_list/CandidateList'
import { mockUsers } from './mocks/users'

function App() {
  const [timeInput, setTimeInput] = useState<string>('')

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setTimeInput(value)
  }
  return (
    <div className="app">
      <div className="panel">
        抽獎時間
        <div className="row alignCenter marginVertical">
          <input
            className="input"
            value={timeInput}
            onChange={handleInput}
          />
          <div className="marginHorizontal">
            分鐘
          </div>
          <div className="button marginHorizontal">
            設定
          </div>
        </div>
        <Counter />
      </div>
      <div className="panel">
        <CandidateList users={mockUsers} />
      </div>
    </div>
  )
}

export default App;
