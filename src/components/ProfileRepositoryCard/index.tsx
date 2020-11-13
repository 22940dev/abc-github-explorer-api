import React from 'react';

import starIcon from '../../assets/star.svg';
import forkIcon from '../../assets/fork.svg';
import issueIcon from '../../assets/info.svg';

import * as S from './styles';

interface ProfileRepositoryProps {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues: number;

  owner: {
    avatar_url: string,
  },
}

const ProfileRepositoryCard = ({
  full_name,
  description,
  stargazers_count,
  forks_count,
  open_issues,
  owner,
}: ProfileRepositoryProps) => {
  return (
    <S.Container>
      <header>
        <img src={owner.avatar_url} alt={full_name}/>
        <h2>{full_name}</h2>
        <span>{description}</span>
      </header>
      <main>
        <S.NumbersInfo>
          <img src={starIcon} alt="Estrela"/>
          <strong>{stargazers_count}</strong>
          <span>Stars</span>
        </S.NumbersInfo>
        <S.NumbersInfo>
          <img src={forkIcon} alt="Estrela"/>
          <strong>{forks_count}</strong>
          <span>Forks</span>
        </S.NumbersInfo>
        <S.NumbersInfo>
          <img src={issueIcon} alt="Estrela"/>
          <strong>{open_issues}</strong>
          <span>Issues</span>
        </S.NumbersInfo>
      </main>
    </S.Container>
  );
}

export default ProfileRepositoryCard;