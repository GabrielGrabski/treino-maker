import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { CiLogin } from "react-icons/ci";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { MdAccountCircle } from "react-icons/md";

export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
  }, []);

  return (
    <header>
      <div className={styles.container}>
        <Link className={styles.link} to="/home">
          <img
            src="https://academiaoriginal.com.br/wp-content/uploads/2022/06/cropped-logo-2018-tradicional.png"
            alt="Image Logo"
            className="logo"
          />
        </Link>

        <nav>
          {!isAuthenticated && (
            <>
              <Link className={styles.link} to="/login">
                Entrar
              </Link>
              <CiLogin color="#fff" size={24} />
            </>
          )}

          {isAuthenticated && (
            <>
              <Link className={styles.link} to="/account">
                Conta
              </Link>
              <MdAccountCircle color="#fff" size={20} />
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
