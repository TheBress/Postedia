export interface InitialState {
  user: User;
  posts: Post[];
  token: string;
  isEdited: boolean;
  userFriends: Friend[];
  post: Post;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath: string;
  friends: Friend[];
  location: string;
  occupation: string;
  viewedProfile: string[];
  impressions: number;
  twitterUrl: string;
  linkedinUrl: string;
}

export interface Post {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  likes: boolean[];
  updatedAt: string;
  comments: Comment[];
  isEdited: boolean;
}

export interface Comment {
  user: User;
  comment: string;
  createdAt: string;
}

export interface UpdateComment {
  idUser: string;
  comment: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UpdatedUser {
  occupation: string;
  location: string;
  twitterUrl: string;
  linkedinUrl: string;
  viewedProfile: number;
  impressions: number;
  _id: any;
}

export interface Friend {
  _id: string;
  firstName: string;
  lastName: string;
  location: string;
  occupation: string;
  picturePath: string;
}

export interface Ad {
  name: string;
  url: string;
  image: string;
  nameUrl: string;
}
