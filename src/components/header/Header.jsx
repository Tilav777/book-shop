import './Header.css'

function Header() {
  return (
    <header className='header'>
        <a href="#" className='header-logo'>Dashboard</a>
        <div className="user-part">
            <label className="header-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                    <path d="M25 25.6667L19.2 19.7826M22.3333 12.1401C22.3333 18.1165 17.5577 22.9614 11.6667 22.9614C5.77563 22.9614 1 18.1165 1 12.1401C1 6.16369 5.77563 1.31885 11.6667 1.31885C17.5577 1.31885 22.3333 6.16369 22.3333 12.1401Z" stroke="#898989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input type="search" placeholder='Search book here'/>
            </label>
            <button className='header-settings'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 20" fill="none">
                  <path d="M4 19V12M4 8V1M12 19V10M12 6V1M20 19V14M20 10V1M1 12H7M9 6H15M17 14H23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    </header>
  )
}

export default Header