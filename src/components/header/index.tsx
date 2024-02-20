import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { CiLogin } from "react-icons/ci";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { MdAccountCircle } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";

export const Header = () => {
  const navigate = useNavigate();

  const { isAuthenticated, setAuthenticated } = useContext(AuthContext);

  const signOut = () => {
    localStorage.clear();
    setAuthenticated(false);
    navigate("/login");
  };

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
              <Link className={`${styles.link} ${styles.navLink}`} to="/login">
                Entrar
                <CiLogin color="#fff" size={24} />
              </Link>
            </>
          )}

          {isAuthenticated && (
            <>
              <Link
                className={`${styles.link} ${styles.navLink}`}
                to="/account"
              >
                Academia Espaço Fit
                <MdAccountCircle color="#fff" size={20} />
              </Link>

              <Link
                onClick={signOut}
                className={`${styles.link} ${styles.navLink}`}
                to="/login"
              >
                Logout
                <PiSignOut color="#fff" size={20} />
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
