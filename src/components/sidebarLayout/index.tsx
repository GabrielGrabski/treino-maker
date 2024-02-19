import { ReactNode } from "react";
import { SideBar } from "../sidebar";
import styles from "./sidebar.module.css";

interface SideBarProps {
  children: ReactNode;
}

export const SideBarLayout = ({ children }: SideBarProps) => {
  return (
    <div className={styles.container}>
      <SideBar />
      {children}
    </div>
  );
};
