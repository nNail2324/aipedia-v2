import styles from './Filters.module.css'

export const Filters = () => {
    return(
        <form className={styles.form}>
            <fieldset className={styles.fieldset}>
                <h2 className={styles.fieldsetTitle}>Поиск</h2>
                <label className={styles.fieldsetLabel}>
                    <input 
                        type="text"
                        placeholder="exampleai"
                        className={styles.fieldsetTextfield}
                    />
                </label>
            </fieldset>
            <fieldset className={styles.formFieldset}>
                <h2 className={styles.fieldsetTitle}>Форматы</h2>
                <div className={styles.fieldsetGenerationTypes}>
                    <label className={styles.fieldsetLabel}>
                        <input 
                            type="checkbox"
                            className={styles.fieldsetCheckbox && styles.visuallyHidden}
                        />
                        <span className={styles.fieldsetPseudoCheckbox && styles.generationType}>Текст</span>
                    </label>
                    <label className={styles.fieldsetLabel}>
                        <input 
                            type="checkbox"
                            className={styles.fieldsetCheckbox && styles.visuallyHidden}
                        />
                        <span className={styles.fieldsetPseudoCheckbox && styles.generationType}>Изображение</span>
                    </label>
                    <label className={styles.fieldsetLabel}>
                        <input 
                            type="checkbox"
                            className={styles.fieldsetCheckbox && styles.visuallyHidden}
                        />
                        <span className={styles.fieldsetPseudoCheckbox && styles.generationType}>Видео</span>
                    </label>
                    <label className={styles.fieldsetLabel}>
                        <input 
                            type="checkbox"
                            className={styles.fieldsetCheckbox && styles.visuallyHidden}
                        />
                        <span className={styles.fieldsetPseudoCheckbox && styles.generationType}>Аудио</span>
                    </label>
                </div>
            </fieldset>
        </form>
    )
}