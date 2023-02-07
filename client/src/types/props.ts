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
  children: JSX.Element[];
}

export interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
}
