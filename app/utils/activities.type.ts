export type Activity = {
  activity: string;
  link: string;
  accessibility: number;
  participants: number;
  type: string;
  key: string;
  price: number;
};

export type Photo = {
  id: number;
  width?: number;
  height?: number;
  url: string;
  photographer?: string;
  src: {
    original: string;
    medium: string;
    large: string;
    thumbnail: string;
  };
};
export type PexelsSearchResponse = {
  photos: Photo[];
};
