export interface DevelopersData {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: {
    repositoryName: string;
    description: string;
    url: string;
  };
}

export interface RepositoriesData {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description?: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: {
    username: string;
    url: string;
    avatar: string;
  }[];
}

export interface TrendingOptionsProps  {
  showDevData: boolean;
}
