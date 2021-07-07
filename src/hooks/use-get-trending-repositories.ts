import { HookReturnType, ICallbackParams, useApiHookWrapper } from '@hooks/use-api-hook-wrapper';
import axios from 'axios';
import { RepositoriesData } from '../utils/types';
type Input = unknown;
type Output = RepositoriesData[];

const mountFn = async () => {
  const { data } = await axios.get('http://localhost:3000/api/repositories');
  return data;
};

const errorFn = async (props: ICallbackParams<Input, Output>) => {
  const { error, exception } = props;

  if (!error || !exception) {
    return {};
  }

  return { error, exception };
};

export const useGetTrendingRepositories = (): HookReturnType<Input, Output> => {
  return useApiHookWrapper({
    initialInput: undefined,
    initialIsLoading: false,
    mountFn,
    unmountFn: undefined,
    skipInitialApiCallOnEmptyInputs: false,
    errorFn: errorFn,
  });
};
