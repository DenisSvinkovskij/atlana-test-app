import { api } from '.';
import { IRepo } from '../types/repository';
import { IAxiosResponse } from '../types/shared';

export const getCurrentUseRepos = async (url: string): Promise<IRepo[]> => {
  const { data: repos }: IAxiosResponse<IRepo[]> = await api.get(
    `${url}?per_page=100`,
  );
  return repos;
};
