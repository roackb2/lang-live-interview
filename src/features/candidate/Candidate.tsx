import React from 'react';
import styles from './Candidate.module.scss';
import { User } from '../../types';

interface CandidateProp {
  user: User
}

function Candidate(props: CandidateProp) {
  const { user } = props
  return (
    <div className={styles.candidate}>
      <img
        className={styles.profilePic}
        src={user.avatar}
      />
      <div className={styles.username}>
        { user.username }
      </div>
    </div>
  )
}

export default Candidate;
