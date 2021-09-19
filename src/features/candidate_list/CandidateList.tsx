import React from 'react';
import styles from './CandidateList.module.scss';
import { User } from '../../types';
import Candidate from '../candidate/Candidate'

interface CandidateListProp {
  users: Array<User>
}

function CandidateList(props: CandidateListProp) {
  const { users } = props

  return (
    <div className={styles.CandidateList}>
      { users.map((user: User) => (
        <Candidate user={user} key={user.username} />
      ))}
    </div>
  )
}

export default CandidateList;
