import { useEffect, useState } from "react";
import { getProfile } from "../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        window.location.href = "/";
        return;
      }

      try {
        const { data } = await getProfile(token);
        setUser(data);
      } catch (err) {
        alert("Session expired, please login again");
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
