export interface IAxiosResponse<T> {
  data: T;
}

export interface ISearchResponse<T> {
  incomplete_results: boolean;
  items: T;
  total_count: number;
}
