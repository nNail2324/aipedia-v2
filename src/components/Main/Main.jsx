import styles from './Main.module.css'
import { Filters } from '../Filters/Filters'
import { CardList } from '../CardList/CardList'

export const Main = function({cards}) {
    return(
        <main className={styles.content}>
            <Filters />
            <CardList cards={cards} />
        </main>
    )
}