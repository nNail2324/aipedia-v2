import styles from './App.module.css'
import { useState } from 'react'
import { Header } from './components/Header/Header'
import { CardList } from './components/CardList/CardList';
import { Filters } from './components/Filters/Filters';

const cardsData = [
  { title: 'DeepSeek', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Текст', 'Видео', 'Аудио'], id: '1'},
  { title: 'DeepSeek', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Текст', 'Видео', 'Аудио'], id: '2'},
  { title: 'DeepSeek', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Текст', 'Видео', 'Аудио'], id: '3'},
  { title: 'DeepSeek', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Текст', 'Аудио'], id: '4'},
  { title: 'OpenAi', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Видео', 'Аудио'], id: '5'},
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [generationType, setGenerationType] = useState([]);

  const filteredCards = cardsData.filter((card) =>{
    const searchMatch = searchQuery === '' || card.title.toLowerCase().includes(searchQuery.toLowerCase());
    const changeMatch = generationType.length === 0 || generationType.some((item) => card.generationTypeList.includes(item));

    return searchMatch && changeMatch;
  })

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Filters 
          searchQuery = {searchQuery} setSearchQuery = {setSearchQuery}
          generationType = {generationType} setGenerationType={setGenerationType}
        />
        <CardList cards={filteredCards} />
      </main>
    </div>
  )
}

export default App
