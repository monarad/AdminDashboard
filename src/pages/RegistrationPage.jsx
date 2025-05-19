import { useState } from "react";
import api from "../configs/api";

function RegistrationPage() {
  const[form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandler=(e)=>{
    setForm((form)=>({ [e.target.name]: e.target.value }));

  }
  const registerHandler=(e)=>{
    e.preventDefault();
    api.get("products").then((res) => {
      console.log("API Response:", res.data);
    });
    const{username,password,confirmPassword}=form;

    if (!username || !password)
      return alert("User Name and Password is Necessary");
    if (password !== confirmPassword) return alert("Passwords Isn't The Same!");
  }
  return (
    <form onSubmit={registerHandler}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={form.username}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        value={form.confirmPassword}
        onChange={changeHandler}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationPage;
