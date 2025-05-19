import { useState } from "react";
import api from "../configs/api";
import { useRegister } from "../services/mutations";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const[form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const {mutate}=useRegister()
 
  const changeHandler=(e)=>{
    setForm((form)=>({...form, [e.target.name]: e.target.value }));

  }
  const registerHandler=(e)=>{
    e.preventDefault();
    // api.get("products").then((res) => {
    //   console.log("API Response:", res.data);
    // });
    const{username,password,confirmPassword}=form;

    if (!username || !password)
      return alert("User Name and Password is Necessary");
    if (password !== confirmPassword) return alert("Passwords Isn't The Same!");

   // console.log({ username, password, confirmPassword });
    
    mutate({username,password},{onSuccess:(data)=>{
      console.log(data)
      navigate("/login")
    }
   , onError:(error)=>console.log(error)})
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
