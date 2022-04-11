import { FC } from 'react';
import styles from './RepoItem.module.scss';
interface RepoItemProps {
  stars: number;
  forks: number;
  repoName: string;
}

export const RepoItem: FC<RepoItemProps> = ({ repoName, forks, stars }) => {
  return (
    <li className={styles.item}>
      <div>{repoName}</div>
      <div className={styles.repoInfo}>
        <div>{forks} forks</div>
        <div>{stars} stars</div>
      </div>
    </li>
  );
};
