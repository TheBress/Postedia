export interface InitialState {
  mode: "light" | "dark";
  user: null | User;
  token: null;
  posts: Post[];
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath: string;
  friends: string[];
  location: string;
  occupation: string;
  viewedProfile: number;
  impressions: number;
}

export interface Post {
  _id: string;
}
