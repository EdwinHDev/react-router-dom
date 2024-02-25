import { Link, Outlet } from "react-router-dom"

export const Layout = () => {

  return (
    <div>
      <h1>Layout</h1>
      <nav style={{
        display: "flex",
        gap: "24px",
        padding: "16px 0"
      }}>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
      </nav>
      <Outlet />
    </div>
  )
}
