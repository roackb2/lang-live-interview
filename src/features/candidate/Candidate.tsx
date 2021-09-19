import React from 'react';
import styles from './Candidate.module.scss';
import { User } from '../../types';

interface CandidateProp {
  user: User
}

function Candidate(props: CandidateProp) {
  const { user } = props
  return (
    <div className={styles.Candidate}>
      { user.username }
    </div>
  )
}

export default Candidate;
