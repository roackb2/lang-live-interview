import React from 'react';
import { useSelector } from 'react-redux';
import './Result.scss';
import {
  userSelector
} from './resultSlice'

function Result() {
  const user = useSelector(userSelector)

  return (
    <div className="result">
      <div className="header">
        抽獎結果
      </div>
      <div className="userContainer">
        <img
          className="avatar"
          src={user.avatar}
        />
        <div className="username">
          { user.username }
        </div>
      </div>
    </div>
  )
}

export default Result;