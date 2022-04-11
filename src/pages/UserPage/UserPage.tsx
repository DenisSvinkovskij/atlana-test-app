import React, { ChangeEvent, FC } from 'react';
import { useParams } from 'react-router-dom';
import { List } from '../../components/List/List';
import { RepoItem } from '../../components/RepoItem/RepoItem';
import { TextInput } from '../../components/TextInput/TextInput';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { useGetCurrentUserData } from '../../hooks/useCurrentUserData';
import { useInput } from '../../hooks/useInput';
import styles from './UserPage.module.scss';

export const UserPage: FC = () => {
  const params = useParams();
  const { user, usersRepo, handleFilterRepo } = useGetCurrentUserData(
    params.ghLogin as string,
  );

  const { value, onChange } = useInput();

  const proxyOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFilterRepo(e.target.value);
    onChange(e);
  };

  return (
    <div className={styles.container}>
      <UserInfo
        avatarUrl={user.avatar_url}
        description={user.bio}
        email={user.email}
        followers={user.followers}
        following={user.following}
        location={user.location}
        joinDate={user.created_at}
        userName={user.name ? user.name : user.login}
      />
      <TextInput
        value={value}
        onChange={proxyOnChange}
        placeholder="Search for User's Repositories"
      />

      <List>
        {usersRepo.map(
          ({ id, name, html_url, forks_count, stargazers_count }) => (
            <a
              href={html_url}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              key={id}
            >
              <RepoItem
                key={id}
                forks={forks_count}
                stars={stargazers_count}
                repoName={name}
              />
            </a>
          ),
        )}
      </List>
    </div>
  );
};
