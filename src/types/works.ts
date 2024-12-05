export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  client: string;
  title: string;
  short_desc: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
  site_link: string;
  top_image: {
    url: string;
    height: number;
    width: number;
  };
  content: string;
};
