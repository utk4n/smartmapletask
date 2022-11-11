export type News = {
  title: string;
  description: string;
  date: string;
  source: string;
  img_url: string;
};

export type NewsState = {
  list: News[];
  error: string | null;
  status: "loading" | "idle";
  showDetails: boolean;
  showDetailsContent?: {
    title?: string;
    description?: string;
    date?: string;
    source?: string;
    img_url?: string;
  };
};
