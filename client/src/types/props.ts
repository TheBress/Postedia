import { UserInfo } from ".";

export interface FriendProps {
  friendID: string;
  name: string;
  myKey?: number;
  userPicturePath: string;
  subtitle: string;
  mt?: string;
  userId?: string;
  postId?: string;
  isUpdate?: boolean;
  setisUpdate?: (value: boolean) => void;
}

export interface ChildrenProps {
  children: JSX.Element[] | JSX.Element;
  isEdited?: boolean;
  url?: string;
  height?: string;
  hasLinkedin?: boolean;
  hasTwitter?: boolean;
  onClickAction?: () => void;
  addFriend?: () => void;
  setIsEnter?: (value: boolean) => void;
  userInfo?: UserInfo;
}

export interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
}

export interface UpdatePost {
  description: string;
}
