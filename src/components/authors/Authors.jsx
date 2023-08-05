import './Authors.css'

function Authors({svg, touched, added, title, addedColor}) {
  return (
    <div className='authors'>
        <a href="#">{svg}</a>
        <div className="authors-head">
            <div className="touched">
                <span>{touched}</span>
                <span>{title}</span>
            </div>
            <span className='authors-added' style={{color: addedColor}} >{added}</span>
        </div>
    </div>
  )
}

export default Authors