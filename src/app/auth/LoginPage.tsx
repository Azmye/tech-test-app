import React, { useState } from "react";
import { useLoginMutation } from "../../redux/api/auth/login";
import { dispatch } from "../../redux/store";
import { setLogin } from "../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await login({
        username: username,
        password: password,
      });
      dispatch(setLogin({ user: data?.userdata, isAuth: true }));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container m-auto w-full h-dvh flex justify-center items-center">
      <div className="w-1/4 shadow-md rounded-md p-3">
        <h5 className="text-3xl mb-5 font-semibold">Login Here!</h5>
        <form onSubmit={handleSubmit}>
          <div className="border-b focus-within:border-b-sky-500">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="outline-none w-full pt-2 pb-1"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="border-b focus-within:border-b-sky-500">
            <input
              type={isShowPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="outline-none w-full pt-2 pb-1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="flex justify-end">
            <input
              onChange={() => setIsShowPassword(!isShowPassword)}
              checked={isShowPassword}
              type="checkbox"
              id="showPassword"
            />
            <label htmlFor="showPassword" className="select-none">
              Show Password
            </label>
          </div>

          <button
            type="submit"
            className="bg-sky-500 w-full rounded-md text-white p-1 mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
