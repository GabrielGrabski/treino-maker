import { ReactNode } from "react";
import styles from "./homeCard.module.css";

interface HomeCardProps {
  name: string;
  icon: ReactNode;
}

export const HomeCard = ({ name, icon }: HomeCardProps) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      {icon}
    </div>
  );
};
