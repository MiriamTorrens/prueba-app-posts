import { UserPostType } from "../../types";
import axios from "axios";

export let users: UserPostType[];
export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return (users = response.data);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (!err?.response) {
        console.log("No Server Response");
      }
    }
  }
};
getUsers();

export const userImages: string[] = [
  "https://xsgames.co/randomusers/assets/avatars/female/8.jpg",
  "https://xsgames.co/randomusers/assets/avatars/male/7.jpg",
  "https://xsgames.co/randomusers/assets/avatars/female/22.jpg",
  "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
  "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
  "https://xsgames.co/randomusers/assets/avatars/female/41.jpg",
  "https://xsgames.co/randomusers/assets/avatars/male/48.jpg",
  "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
  "https://xsgames.co/randomusers/assets/avatars/female/39.jpg",
  "https://xsgames.co/randomusers/assets/avatars/female/23.jpg",
];
