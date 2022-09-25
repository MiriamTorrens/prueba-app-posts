import { UserType } from "../../types";
import axios from "axios";

export let users: UserType[];
export const getUsers = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/users").then(response => users = response.data);
}
getUsers();

export const userImages: string[] = ["https://xsgames.co/randomusers/assets/avatars/female/8.jpg", "https://xsgames.co/randomusers/assets/avatars/male/7.jpg", "https://xsgames.co/randomusers/assets/avatars/female/22.jpg", "https://xsgames.co/randomusers/assets/avatars/female/5.jpg", "https://xsgames.co/randomusers/assets/avatars/female/32.jpg", "https://xsgames.co/randomusers/assets/avatars/female/41.jpg", "https://xsgames.co/randomusers/assets/avatars/male/48.jpg", "https://xsgames.co/randomusers/assets/avatars/male/2.jpg", "https://xsgames.co/randomusers/assets/avatars/female/39.jpg", "https://xsgames.co/randomusers/assets/avatars/female/22.jpg"];
 

