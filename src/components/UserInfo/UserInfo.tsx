import React, { FC } from 'react';
import styles from './UserInfo.module.scss';

interface UserInfoProps {
  avatarUrl: string;
  userName: string;
  followers: number;
  following: number;
  email: string | null;
  location: string | null;
  description: string;
  joinDate: Date | string;
}

export const UserInfo: FC<UserInfoProps> = ({
  avatarUrl,
  description,
  email,
  followers,
  following,
  joinDate,
  location,
  userName,
}) => {
  const formatDate = (date: string): string => {
    return date.split('T')[0];
  };
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.topInfoBlock}>
        <div className={styles.imgContainer}>
          <img src={avatarUrl} alt={userName} className={styles.image} />
        </div>
        <div className={styles.info}>
          <p>{userName}</p>
          <p>Email: {email ?? 'none'}</p>
          <p>Location: {location ?? 'none'}</p>
          <p>Join Date: {formatDate(`${joinDate}`)}</p>
          <p>{followers} Followers</p>
          <p>Following {following}</p>
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};
