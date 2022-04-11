import { api } from '.';
import { IAxiosResponse } from '../types/shared';
import { IUser } from '../types/user';

export const getCurrentUserByName = async (
  username: string,
): Promise<IUser> => {
  const { data: user }: IAxiosResponse<IUser> = await api.get(
    `users/${username}`,
  );
  return user;
};
