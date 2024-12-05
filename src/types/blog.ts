export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  topImage: {
    url: string;
    width: number;
    height: number;
  };
  body: string;
  tags: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
  };
};
