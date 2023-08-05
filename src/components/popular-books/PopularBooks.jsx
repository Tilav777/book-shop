import './PopularBooks.css'
import { Link } from 'react-router-dom'

function PopularBooks({datas}) {
  return (
    <div className="popular-books">
        <h3>Popular book</h3>
        <div className="books">
            {
                datas.map(data => {
                    return (
                        <Link key={data.id} to={`about/${data.id}`}>
                            <img src={data.image} alt="image" />
                            <span>{data.title}</span>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PopularBooks