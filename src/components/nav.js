import Link from "next/link"


export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" href="./">Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="./">หน้าแรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/About">เกี่ยวกับ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/Contact">ติดต่อเรา</Link>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการ
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Artificial Intelligence</Link></li>
            <li><Link className="dropdown-item" href="#">Smart Home</Link></li>
            <li><Link className="dropdown-item" href="#">Software</Link></li>
          </ul>
        </li>
      </ul>
      
      <form className="d-flex">
        <button className="btn btn-outline-success me-md-2" type="submit">Sign In</button>
        <button className="btn btn-outline-primary" type="submit">Sign Up</button>
      </form>


    </div>
  </div>
</nav>

  );
}
