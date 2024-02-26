import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../utilits/icons";
import { BASE_URL } from "../utilits/constant";
import axios from "axios";

function Registrations() {
  const navigate = useNavigate();
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [error, setError] = useState(null);

  const handleShowpass1 = () => {
    setShowPass1((p) => !p);
  };
  const handleShowpass2 = () => {
    setShowPass2((p) => !p);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/app/regis/`, {
        phone: phone,
        password: password,
        // password: password1,
      });

      console.log(response?.data?.token);
      localStorage.setItem("token", response?.data?.token);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    setError(null);
  }, [phone, password, password1]);
  return (
    <div className="container m-auto ">
      <div className="my-[50px] p-8 border-[2px] border-solid rounded-[10px]  bg-Crect lg:w-[450px] m-auto">
        <h1 className="text-subtitless mb-[30px]">Зарегистрируйтесь в системе</h1>
        <form className="grid gap-5 " onSubmit={handleSubmit} action="">
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            className="py-4 px-5 text-Body text-brand rounded-[4px]"
            type="number"
            placeholder="Ваш номер телефона"
          />
          <div className=" relative bg-white py-4 px-5 text-Body text-brand rounded-[4px] ">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-[100%] outline-none"
              type={showPass1 ? "text" : "password"}
              placeholder="Пароль"
            />
            <button
              type="button"
              className="absolute right-0"
              onClick={handleShowpass1}
            >
              {showPass1 ? icons.paroll : icons.par}
            </button>
          </div>
          <span className="text-red-600">
            {error && "Login yoki parol xato!"}
          </span>
          {/* <div className=" relative bg-white py-4 px-5 text-Body text-brand rounded-[4px] ">
            <input
              onChange={(e) => setPassword1(e.target.value)}
              value={password1}
              required
              className="w-[100%] outline-none"
              type={showPass2 ? "text" : "password"}
              placeholder="Подтвердит Пароль"
            />
            <button
              type="button"
              className="absolute right-0"
              onClick={handleShowpass2}
            >
              {showPass2 ? icons.paroll : icons.par}
            </button>
          </div> */}
          <div className="flex items-center my-4 ">
            <input
              required
              className="mr-[10px] w-[30px] h-[30px] text-Cmain"
              type="checkbox"
            />
            <p className="text-Bodysmall">
              <span>Я согласен с</span>политикой конфиденциальности и условиями{" "}
              <span>пользование.</span>{" "}
            </p>
          </div>
          <button
            onClick={(e) => handleSubmit("")}
            className="py-2 px-4  rounded-[4px] text-center text-Body text-Cwhite bg-bgmain w-[100%] cursor-pointer"
          >
            Войти
          </button>
        </form>
        <p
          onClick={() => navigate("/Signin")}
          className="mt-8 text-Bodysmall text-Cmain cursor-pointer"
        >
          Уже есть аккаунт
        </p>
      </div>
    </div>
  );
}

export default Registrations;
