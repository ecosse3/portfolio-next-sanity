type TCoverImage = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  },
  crop: {
    _type: string;
    bottom: number;
    left: number;
    right: number;
    top: number;
  }
}

type TComment = {
  comment: string;
  name: string;
}

type TAuthor = {
  name: string;
  picture: string;
}

export type TPost = {
  _createdAt: Date;
  _updatedAt: Date;
  publishedAt: Date;
  title: string;
  coverImage: TCoverImage;
  comments: TComment[];
  date: Date;
  author: TAuthor;
  excerpt: unknown;
  slug: {
    current: string;
  };
}
