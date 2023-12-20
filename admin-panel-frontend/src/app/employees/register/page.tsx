import styles from "./register.module.css"

export default function RegisterEmployee() {
    return (
        <div>
            <form action="">
                <div className={styles.FormContainer}>
                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Nome</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Sobrenome</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Sexo</label>
                            <select name="" id="">
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                            </select>
                        </div>

                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Data de nascimento</label>
                            <input type="date" name="" id="" />
                        </div>

                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">RG</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">CPF</label>
                            <input type="text" name="" id="" />
                        </div>

                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Cargo</label>
                            <select name="" id="">
                                <option value="">
                                    Tecnologia da Informação
                                </option>
                                <option value="">Vendas</option>
                                <option value="">Marketing</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Salário</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">CEP</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Logradouro</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Complemento</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Bairro</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Localidade</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">UF</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Data de admissão</label>
                            <input type="date" name="" id="" />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div className={`${styles.FormInput}`}>
                            <label htmlFor="">Data de criação</label>
                            <input type="date" name="" id="" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
