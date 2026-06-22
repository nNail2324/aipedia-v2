import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';

const cards = [
  { title: 'DeepSeek', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Текст', 'Видео', 'Аудио']},
  { title: 'DeepSeek', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Текст', 'Видео', 'Аудио']},
  { title: 'DeepSeek', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Текст', 'Видео', 'Аудио']},
  { title: 'DeepSeek', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Текст', 'Видео', 'Аудио']},
  { title: 'DeepSeek', vpn: 'Не нужен', limitationText: 'Лимитов нет', generationTypeList: ['Текст', 'Видео', 'Аудио']},
];


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main cards={cards} />
    </div>
  )
}

export default App
