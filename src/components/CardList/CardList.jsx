import styles from './CardList.module.css'
import { Card } from '../Card/Card'

export const CardList = function({cards}) {
    return(
        <ul className={styles.cardList}>
            {
              cards.map((card) => (
                <Card key={card.id} title={card.title} vpn={card.vpn} limitationText={card.limitationText} generationTypeList={card.generationTypeList} />
              ))  
            }
        </ul>
    )
}