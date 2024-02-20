import { FormEvent, useState } from "react";
import styles from "./category.module.css";
import { toast } from "react-toastify";

export const Category = () => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (category === "") {
      toast.error("Informe o nome da categoria!");
    } else {
      toast.success("Categoria cadastrada com sucesso!");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Categoria de treino</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formBox}>
          <input
            className={styles.input}
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Digite o nome da categoria [Peito, Costas, Perna, A, B...]"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Criar Categoria
        </button>
      </form>

      <div className={styles.categories}>
        <h4 className={styles.categoriesTitle}>Categorias cadastradas</h4>
        <div className={styles.categoriesItems}>
          <p>Peito</p>
          <p>Perna</p>
          <p>Costas</p>
          <p>A</p>
          <p>B</p>
          <p>C</p>
        </div>
      </div>
    </div>
  );
};
