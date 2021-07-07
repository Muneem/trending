import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { DevelopersData } from '../../src/utils/types';
export default async (req: NextApiRequest, res: NextApiResponse<DevelopersData>) => {
  const { data = {} } = (await axios.get('https://gh-trending-api.herokuapp.com/developers')) ?? {};
  res.status(200).json(data);
};
