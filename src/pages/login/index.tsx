import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validForm, setValidForm] = useState(true);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    validateForm(email, password);
    if (email !== "" && password !== "") {
      localStorage.setItem("token", "123");
      navigate("/");
    }
  };

  const validateForm = (email: string, password: string) => {
    if (email === "" || password === "") {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <img
          src="https://academiaoriginal.com.br/wp-content/uploads/2022/06/cropped-logo-2018-tradicional.png"
          alt="Image Logo"
          className={styles.logo}
        />
        <form className={styles.form} onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className={!validForm ? styles.invalid : ""}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              className={!validForm ? styles.invalid : ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {!validForm && (
            <span className={styles.invalidMessage}>
              E-mail ou senha inválidos
            </span>
          )}

          <button className={styles.btnLogin} type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
