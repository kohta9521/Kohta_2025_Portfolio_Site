export type News = {
  id: string;
  createdAt: string;
  title: string;
  date: string;
  tag: { id: string; text: string };
  body: string;
};
