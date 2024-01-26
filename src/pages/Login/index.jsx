import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login_container">
      <div className="login_box">
        <div className="title">
          <Link to={"/"}>
            <IoMdArrowRoundBack />
          </Link>
          <h2>IDENTIFICAÇÃO</h2>
        </div>
        <form>
          <label>*E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>*Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={handleLogin}>
            Entrar
          </button>
        </form>
        <div className="google">
          <h3>FAÇA SEU LOGIN COM REDE SOCIAL</h3>
          <FcGoogle />
        </div>
      </div>
    </div>
  );
}

export default App;
