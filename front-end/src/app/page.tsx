"use client";
import { useEffect, useState } from "react";
import { getUsers } from "@/api/axios";
import { UserType } from "@/types/User";

export default function Home() {
  const [users, setUsers] = useState<UserType[]>([]);

  async function loadUsers() {
    const data = await getUsers();
    setUsers(data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.userName}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
