import styles from './Filters.module.css'

export const Filters = function Filters({searchQuery, setSearchQuery, generationType, setGenerationType}) {
    const handleCheckbox = (event) => {
        const {value, checked} = event.target;

        if (checked) {
            setGenerationType([...generationType, value]);
        } else {
            setGenerationType(generationType.filter((currentValue) => currentValue !== value));
        }
    }

    return(
        <form className={styles.form}>
            <fieldset className={styles.fieldset}>
                <h2 className={styles.fieldsetTitle}>Поиск</h2>
                <label className={styles.fieldsetLabel}>
                    <input 
                        type="text"
                        placeholder="exampleai"
                        className={styles.fieldsetTextfield}
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                </label>
            </fieldset>
            <fieldset className={styles.fieldset}>
                <h2 className={styles.fieldsetTitle}>Форматы</h2>
                <div className={styles.fieldsetGenerationTypes}>
                    <label className={styles.fieldsetLabel}>
                        <input 
                            type="checkbox"
                            value="Текст"
                            className={`${styles.fieldsetCheckbox} ${styles.visuallyHidden}`}
                            onChange={(event) => handleCheckbox(event)}
                        />
                        <span className={`${styles.fieldsetPseudoCheckbox} && ${styles.generationType}`}>Текст</span>
                    </label>
                    <label className={styles.fieldsetLabel}>
                        <input 
                            type="checkbox"
                            value="Изображение"
                            className={`${styles.fieldsetCheckbox} ${styles.visuallyHidden}`}
                            onChange={(event) => handleCheckbox(event)}
                        />
                        <span className={`${styles.fieldsetPseudoCheckbox} && ${styles.generationType}`}>Изображение</span>
                    </label>
                    <label className={styles.fieldsetLabel}>
                        <input 
                            type="checkbox"
                            value="Видео"
                            className={`${styles.fieldsetCheckbox} ${styles.visuallyHidden}`}
                            onChange={(event) => handleCheckbox(event)}
                        />
                        <span className={`${styles.fieldsetPseudoCheckbox} && ${styles.generationType}`}>Видео</span>
                    </label>
                    <label className={styles.fieldsetLabel}>
                        <input 
                            type="checkbox"
                            value="Аудио"
                            className={`${styles.fieldsetCheckbox} ${styles.visuallyHidden}`}
                            onChange={(event) => handleCheckbox(event)}
                        />
                        <span className={`${styles.fieldsetPseudoCheckbox} && ${styles.generationType}`}>Аудио</span>
                    </label>
                </div>
            </fieldset>
        </form>
    )
}