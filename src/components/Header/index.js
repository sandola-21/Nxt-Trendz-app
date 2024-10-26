import './index.css'

const Header = () => {
  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-mobile-logs-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav-logout"
              className="logout-image"
            />
          </div>
          <div className="nav-desktop-logs-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-menu-items-container">
              <li className="nav-menu-item"> Home </li>
              <li className="nav-menu-item"> Products </li>
              <li className="nav-menu-item"> Cart </li>
            </ul>
            <button type="button" className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
