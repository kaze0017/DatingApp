import axios from "axios";
import { UserType } from "@/types/User";

const instance = axios.create({
  baseURL: "https://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getUsers(): Promise<UserType[]> {
  try {
    const response = await instance.get("/users");
    console.log("res:", response);

    const users = response.data.map((user: any) => {
      return {
        id: user.id,
        userName: user.userName,
      };
    });
    return users;
  } catch (error) {
    console.log("error:", error);
  }
  return [];
}
