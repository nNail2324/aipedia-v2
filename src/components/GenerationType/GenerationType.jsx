import styles from "./GenerationType.module.css" 

export const GenerationType = (props) => {
const {generationType} = props;

    return(
        <li className={styles.generationType}>{generationType}</li>
    )
}