import { useState } from "react";

// This is a simple simulated auth hook
export default function useAuth() {
  // You can toggle this value to simulate login/logout
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return { user, login, logout };
}
