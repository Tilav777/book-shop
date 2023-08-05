import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


// Components
import Menu from './components/menu/Menu'
import Authors from './components/authors/Authors'
import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import PopularBooks from './components/popular-books/PopularBooks'

function App() {

  const [datas, setDatas] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/books')

  useEffect(()=> {
    const getData = async () => {
      const res = await axios.get(url)
      setDatas(res.data)
    }
    getData()
  },[])

  return (
    <>
      <Menu />
      <main className='main-page'>
        <div className="main-page__left">
          <Header />
          <div className="authors-container">
            <Authors svg={<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="#3DB5CD"/>
              <path d="M45 46V43.5556C45 42.2589 44.4732 41.0154 43.5355 40.0986C42.5979 39.1817 41.3261 38.6667 40 38.6667H30C28.6739 38.6667 27.4021 39.1817 26.4645 40.0986C25.5268 41.0154 25 42.2589 25 43.5556V46M40 28.8889C40 31.5889 37.7614 33.7778 35 33.7778C32.2386 33.7778 30 31.5889 30 28.8889C30 26.1888 32.2386 24 35 24C37.7614 24 40 26.1888 40 28.8889Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} touched={28.886} title={'Book Authors'} addedColor={'#3DB5CD'} added={'+1280'}/>
            <Authors svg={<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="#F0B817"/>
              <path d="M35 29.4444C35 28.2657 34.5364 27.1352 33.7113 26.3017C32.8861 25.4683 31.767 25 30.6 25H24V41.6667H31.7C32.5752 41.6667 33.4146 42.0179 34.0335 42.643C34.6523 43.2681 35 44.1159 35 45M35 29.4444V45M35 29.4444C35 28.2657 35.4636 27.1352 36.2887 26.3017C37.1139 25.4683 38.233 25 39.4 25H46V41.6667H38.3C37.4248 41.6667 36.5854 42.0179 35.9665 42.643C35.3477 43.2681 35 44.1159 35 45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} touched={26.995} title={'Book Readers'} addedColor={'#f0b817'} added={'+1082'}/>
            <Authors svg={<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="#0C9D6C"/>
              <path d="M31.2111 36.661L38.8 41.039M38.7889 28.961L31.2111 33.339M45 27.3C45 29.1225 43.5076 30.6 41.6667 30.6C39.8257 30.6 38.3333 29.1225 38.3333 27.3C38.3333 25.4775 39.8257 24 41.6667 24C43.5076 24 45 25.4775 45 27.3ZM31.6667 35C31.6667 36.8225 30.1743 38.3 28.3333 38.3C26.4924 38.3 25 36.8225 25 35C25 33.1775 26.4924 31.7 28.3333 31.7C30.1743 31.7 31.6667 33.1775 31.6667 35ZM45 42.7C45 44.5225 43.5076 46 41.6667 46C39.8257 46 38.3333 44.5225 38.3333 42.7C38.3333 40.8775 39.8257 39.4 41.6667 39.4C43.5076 39.4 45 40.8775 45 42.7Z" stroke="white" strokeLidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>} touched={20.622} title={'Book Sharer'} addedColor={'#0c9d6c'} added={'+1462'}/>
          </div>
          <PopularBooks datas={datas} />
        </div>
        <aside className="main-page__right">
          <Aside />
        </aside>
      </main>
    </>
  )
}

export default App


