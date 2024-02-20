import { FormEvent, useState } from "react";
import styles from "./account.module.css";
import { toast } from "react-toastify";

export const Account = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (newEmail.trim() === "" || newPassword.trim() === "") {
      toast.error("Preencha todos os campos!");
    } else {
      toast.success("Cadastro alterado com sucesso!");
    }

    setNewEmail("");
    setNewPassword("");
  };

  return (
    <div>
      <h1>Configurações de conta</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formControl}>
            <label>Alterar E-mail:</label>
            <input
              type="email"
              placeholder="E-mail"
              className={styles.input}
              onChange={(e) => setNewEmail(e.target.value)}
              value={newEmail}
            />
          </div>

          <div className={styles.formControl}>
            <label>Alterar senha:</label>
            <input
              type="password"
              placeholder="Nova Senha"
              className={styles.input}
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
          </div>

          <button type="submit" className={styles.btn}>
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
};
