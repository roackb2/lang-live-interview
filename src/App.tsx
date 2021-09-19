import React, { useState, useEffect } from 'react';
import './App.scss';
import Counter from './features/counter/Counter'
import CandidateList from './features/candidate_list/CandidateList'
import { mockUsers } from './mocks/users'

function App() {
  const [timeInput, setTimeInput] = useState<string>('')
  const [totalSeconds, setTotalSeconds] = useState<number>(0)
  const [timerId, setTimerId] = useState<any>(-1)
  const [secondsLeft, setSecondsLeft] = useState<number>(0)

  useEffect(() => {
    if (secondsLeft <= 0) return
    const id = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1)
    }, 1000)
    setTimerId(id)
    return () => {
      clearTimeout(timerId)
      setTimerId(-1)
    }
  }, [totalSeconds, secondsLeft])

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setTimeInput(value)
  }

  const handleSetClick = (e: React.FormEvent<HTMLDivElement>) => {
    const seconds = parseInt(timeInput) * 60
    setTotalSeconds(seconds)
    setSecondsLeft(seconds)
  }

  return (
    <div className="app">
      <div className="panel">
        抽獎時間
        <div className="row alignCenter marginVertical">
          <input
            type="number"
            className="input"
            value={timeInput}
            onChange={handleInput}
          />
          <div className="marginHorizontal">
            分鐘
          </div>
          <div
            className="button marginHorizontal"
            onClick={handleSetClick}
          >
            設定
          </div>
        </div>
        <Counter secondsLeft={secondsLeft} />
      </div>
      <div className="panel">
        <CandidateList users={mockUsers} />
      </div>
    </div>
  )
}

export default App;
