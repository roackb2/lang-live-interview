import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import './Home.scss';
import Counter from '../counter/Counter'
import CandidateList from '../candidate_list/CandidateList'
import { User } from '../../types'
import { mockUsers } from '../../mocks/users'
import {
  setUser
} from '../result/resultSlice'

function Home() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [timeInput, setTimeInput] = useState<string>('')
  const [totalSeconds, setTotalSeconds] = useState<number>(0)
  const [timerId, setTimerId] = useState<any>(-1)
  const [secondsLeft, setSecondsLeft] = useState<number>(0)

  const chooseWinner = (): User => {
    const index = Math.floor(Math.random() * 100) % mockUsers.length
    const chosen = mockUsers[index]
    return chosen
  }

  useEffect(() => {
    if (secondsLeft <= 0) return
    const id = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1)
      if (secondsLeft === 1) {
        dispatch(setUser(chooseWinner()))
        history.push('/result')
      }
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
    <div className="home">
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

export default Home;
