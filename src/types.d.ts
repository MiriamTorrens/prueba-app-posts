export interface PostType {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export interface UserPostType {
  id: number;
  name: string;
  username: string;
}
export interface UserType {
  name: string;
  password: string;
}
export interface PropsCard {
  post: PostType;
}
export interface PropsNavBar {
  query: string;
  setQuery: (string) => void;
}
export interface PropsModal {
  open: boolean;
  handleClose: () => void;
  post: PostType;
}
