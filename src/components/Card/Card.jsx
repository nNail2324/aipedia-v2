import { GenerationType } from "../GenerationType/GenerationType"
import styles from "./Card.module.css"

export const Card = (props) => {
    const {title, vpn, limitationText, generationTypeList} = props;

    return(
        <li className={styles.cardListItem}>
            <article className={styles.card}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.vpn}>{vpn}</p>
                <ul className={styles.generationTypeList}>
                    {generationTypeList.map((type, index) => (
                        <GenerationType key={index} generationType={type}/>
                    ))}
                </ul>
                <p className={styles.limitationText}>{limitationText}</p>
                <a href="#0" className={styles.button}>Кнопка</a>
            </article>
        </li>
    )
}