import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import  './About.css'
import axios from 'axios'

function About() {
  const [url, setUrl] = useState(`http://localhost:3000/books/${useParams().id}`)
  const [datas, setDatas] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url)
      setDatas(res.data)
    }
    getData()
  },[url])

  return (
    <div>
      <img src={datas.image} alt="foto" />
      <p>{datas.title}</p>
    </div>
  )
}

export default About