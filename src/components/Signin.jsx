import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utilits/constant";

function Signin() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleShowPass = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/app/login/`, {
        phone: phone,
        password: password,
      });
      localStorage.setItem("token", response?.data?.Success);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    setError(null);
  }, [phone, password]);
  return (
    <div className="container m-auto">
      <div className="p-8 border-[2px] border-solid rounded-[10px] mt-[50px] mb-[34px] bg-Crect w-[500px] m-auto">
        <h1 className="text-subtitle mb-[30px] text-center">
          Войдите в свою учетную запись
        </h1>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            className="py-4 px-5 text-Body text-brand rounded-[4px]"
            type="text"
            placeholder="номер телефона"
          />
          <div className="relative py-4 bg-white px-5 text-Body text-brand rounded-[4px] w-full">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-[100%] outline-none"
              type={showPass ? "text" : "password"}
              placeholder="Пароль"
            />
            <button
              type="button"
              className="absolute right-0"
              onClick={handleShowPass}
            >
              {showPass ? "Show" : "Hide"}
            </button>
          </div>
          <span className="text-red-600">
            {error && "Login yoki parol xato!"}
          </span>

          <div className="flex justify-between my-8">
            <div className="flex items-center">
              <input
                className="mr-[10px] w-[20px] h-[20px] bg-Cmain"
                type="checkbox"
              />
              <p className="text-Bodysmall">Запомнить меня</p>
            </div>
            <div>
              <p className="text-Bodysmall text-Cmain">Забыли пароль ?</p>
            </div>
          </div>
          <button
            onClick={(e) => handleSubmit("")}
            type="submit"
            className="py-2 px-4 rounded-[4px] text-center text-Body text-Cwhite bg-bgmain w-[100%]"
          >
            Войти
          </button>

          <p
            onClick={() => navigate("/Signup")}
            className="mt-8 text-Bodysmall text-Cmain cursor-pointer"
          >
            <span className="text-Bodysmall text-brand">
              У вас нет аккаунта?
            </span>
            Зарегистрируйтесь
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
