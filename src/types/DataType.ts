export type ProjectType = {
  projectId: number,
  srcPortrait: string;
  title: string;
  description: string;
  tag: string;
  techs: {name: string, use: string}[];
  srcImg: any[];
  linkWebsite: string;
  linkRepository: string;
  createdAt: Date;
};

export type ItemNavigationType = {
  iconClass: string;
  title: string;
  to?: string;
};