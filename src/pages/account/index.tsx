import { FormEvent } from "react";
import styles from "./account.module.css";

export const Account = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Cadastro alterado com sucesso!");
  };

  return (
    <div>
      <h1>Configurações de conta</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formControl}>
            <label>Alterar E-mail:</label>
            <input type="email" placeholder="E-mail" />
          </div>

          <div className={styles.formControl}>
            <label>Alterar senha:</label>
            <input type="password" placeholder="Nova Senha" />
          </div>

          <button type="submit" className={styles.btn}>Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
};
