import { useState } from "react";
import { loginUser } from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(form);
      localStorage.setItem("token", data.access);
      alert("Login successful!");
      window.location.href = "/profile";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            window.location.href = "/register";
          }}
        >
          Go to Register
        </button>
      </form>
    </div>
  );
}
