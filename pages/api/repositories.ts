import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { RepositoriesData } from '../../src/utils/types';

export default async (req: NextApiRequest, res: NextApiResponse<RepositoriesData>) => {
  const { data = {} } = (await axios.get('https://gh-trending-api.herokuapp.com/repositories')) ?? {};
  res.status(200).json(data);
};
