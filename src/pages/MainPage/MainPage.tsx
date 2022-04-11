import React, { FC, useCallback, useEffect, useState } from 'react';
import { List } from '../../components/List/List';
import { TextInput } from '../../components/TextInput/TextInput';
import { UserItem } from '../../components/UserItem/UserItem';
import { useInput } from '../../hooks/useInput';
import { getListUsersByName } from '../../services/getListUsersByName';
import { IUser } from '../../types/user';
import styles from './MainPage.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const MainPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const location = useLocation();
  const nav = useNavigate();
  const { value, onChange, setValue } = useInput();

  const fetchUsers = useCallback(async () => {
    if (!value) {
      nav(
        {
          pathname: '/',
        },
        { replace: true },
      );
      setUsers([]);
      return;
    }

    nav(
      {
        pathname: '/',
        search: `?username=${value}`,
      },
      { replace: true },
    );

    const fetchedUsers = await getListUsersByName(value);

    setUsers(fetchedUsers);
  }, [nav, value]);

  useEffect(() => {
    if (location.search) {
      setValue(location.search.split('=')[1]);
    }
  }, [location.search, setValue]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, nav]);

  return (
    <div className={styles.container}>
      <TextInput
        value={value}
        onChange={onChange}
        placeholder="Search for Users"
      />
      {value === '' && <p>Start tipping for search users</p>}
      <List>
        {users.map(({ id, avatar_url, name, public_repos, login }) => (
          <Link to={`/user/${login}`} key={id} className={styles.link}>
            <UserItem
              avatarUrl={avatar_url}
              userName={name ? name : login}
              reposCount={public_repos}
            />
          </Link>
        ))}
      </List>
    </div>
  );
};
