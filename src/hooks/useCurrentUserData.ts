import { useCallback, useEffect, useState } from 'react';
import { getCurrentUserByName } from '../services/getCurrentUserByName';
import { getCurrentUseRepos } from '../services/getCurrentUseRepos';
import { IRepo } from '../types/repository';
import { IUser } from '../types/user';

export const useGetCurrentUserData = (name: string) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [usersRepo, setUsersRepo] = useState<IRepo[]>([]);
  const [filteredUsersRepo, setFilteredUsersRepo] = useState<IRepo[]>([]);

  const fetchUsersData = useCallback(async (username: string) => {
    const user = await getCurrentUserByName(username);
    const repos = await getCurrentUseRepos(user.repos_url);

    setUser(user);
    setUsersRepo(repos);
    setFilteredUsersRepo(repos);
  }, []);

  useEffect(() => {
    fetchUsersData(name);
  }, [fetchUsersData, name]);

  const handleFilterRepo = (value: string) => {
    setFilteredUsersRepo(
      usersRepo.filter(repo =>
        repo.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
      ),
    );
  };

  return { user, usersRepo: filteredUsersRepo, handleFilterRepo };
};
