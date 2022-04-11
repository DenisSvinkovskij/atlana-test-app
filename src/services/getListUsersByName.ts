import { api } from '.';
import { IAxiosResponse, ISearchResponse } from '../types/shared';
import { IUser } from '../types/user';

export const getListUsersByName = async (name: string): Promise<IUser[]> => {
  const { data: users }: IAxiosResponse<ISearchResponse<IUser[]>> =
    await api.get(`search/users?q=${name}`);

  const expandedUsersResponse = await Promise.all(
    users.items.map(user => api.get(`users/${user.login}`)),
  );

  const expandedUsersData = expandedUsersResponse.map(user => user.data);

  return expandedUsersData;
};
