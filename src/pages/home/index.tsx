import { HomeCard } from "../../components/homeCard";
import styles from "./Home.module.css";
import { CgGym } from "react-icons/cg";
import { TbCategoryFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={styles.homeItems}>
      <h1>Bem vindo(a), Academia Espaço fit!</h1>

      <div className={styles.cardsContainer}>
        <Link to="/workout" className={styles.link}>
          <HomeCard name="Treinos" icon={<CgGym color="#fff" size={20} />} />
        </Link>

        <Link to="/categories" className={styles.link}>
          <HomeCard
            name="Categorias"
            icon={<TbCategoryFilled color="#fff" size={20} />}
          />
        </Link>

        <Link to="/settings" className={styles.link}>
          <HomeCard
            name="Configurações"
            icon={<IoMdSettings color="#fff" size={20} />}
          />
        </Link>

        <Link to="/account" className={styles.link}>
          <HomeCard
            name="Conta"
            icon={<RiAccountCircleFill color="#fff" size={20} />}
          />
        </Link>
      </div>
    </div>
  );
};
