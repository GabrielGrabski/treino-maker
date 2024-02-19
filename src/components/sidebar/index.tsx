import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { CgGym } from "react-icons/cg";
import { TbCategoryFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";

export const SideBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <Link className={styles.link} to="/">
            <li className={styles.item}>
              Home
              <IoHomeSharp color="#404040" size={20} />
            </li>
          </Link>
          <Link className={styles.link} to="/workout">
            <li className={styles.item}>
              Treinos
              <CgGym color="#404040" size={20} />
            </li>
          </Link>
          <Link className={styles.link} to="/categories">
            <li className={styles.item}>
              Categorias
              <TbCategoryFilled color="#404040" size={20} />
            </li>
          </Link>
          <Link className={styles.link} to="/settings">
            <li className={styles.item}>
              Configuração
              <IoMdSettings color="#404040" size={20} />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
