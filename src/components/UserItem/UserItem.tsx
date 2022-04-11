import React, { FC } from 'react';
import styles from './UserItem.module.scss';

interface UserItemProps {
  avatarUrl: string;
  userName: string;
  reposCount: number;
}

export const UserItem: FC<UserItemProps> = ({
  avatarUrl,
  reposCount,
  userName,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={avatarUrl} alt={userName} className={styles.image} />
      </div>
      <div>{userName}</div>
      <div>Repo:{reposCount}</div>
    </li>
  );
};
