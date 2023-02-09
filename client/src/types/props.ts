export interface FriendProps {
  friendID: string;
  name: string;
  myKey?: number;
  userPicturePath: string;
  subtitle: string;
  mt?: string;
  userId?: string;
}

export interface ChildrenProps {
  children: JSX.Element[] | JSX.Element;
  isEdited?: boolean;
  url?: string;
  hasPosts?: boolean;
  hasLinkedin?: boolean;
  hasTwitter?: boolean;
}

export interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
}
