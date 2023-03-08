export interface InitialState {
  user: User;
  posts: Post[];
  token: string;
  isEdited: boolean;
  post: Post;
  requestsReceived: Request[];
  requestsSent: Request[];
  notifications: Notification[];
  userFriends: Friend[];
}

export interface Notification {
  _id: string;
  userReceivedId: string;
  userSendId: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface UserInfo {
  isFriend: boolean;
  isUser: boolean;
  isRequest: boolean;
  friendsNumber: string;
  postNumber: string;
  totalLikes: number;
  text: string;
  fullName: string;
}

export interface PostInfo {
  likeCount: number;
  isUpdate: boolean;
  isLiked: boolean;
  fullName: string;
  updatedAt: string;
  _id: string;
  isComment: boolean;
}

export interface Request {
  _id: string;
  userSendId: string;
  userImage: string;
  userReceivedId: string;
  message: string;
  isAccepted: boolean;
  createdAt: string;
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
  historial: User[];
  twitterUrl: string;
  linkedinUrl: string;
  isPublic: boolean;
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
  createdAt: string;
  comments: Comment[];
  isEdited: boolean;
  lastUpdated: string;
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
  _id: any;
  isPublic: boolean;
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
