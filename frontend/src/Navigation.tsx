import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

//Navigation
function Nav(props: any) {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
      <div className="container-fluid">
        <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul
            className={classNames("navbar-nav flex-grow-1", styles.navigation)}
          >
            <li className="nav-item">
              <Link
                to="/"
                className={classNames(
                  "nav-link py-3 px-0 px-lg-3 px-sm-3 rounded",
                  styles.navigation
                )}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/podcasts"
                className={classNames(
                  "nav-link py-3 px-0 px-lg-3 px-sm-3 rounded",
                  styles.navigation
                )}
              >
                My Podcasts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/movies"
                className={classNames(
                  "nav-link py-3 px-0 px-lg-3 px-sm-3 rounded",
                  styles.navigation
                )}
              >
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

/* export default Nav;
//Navigation
function Nav(props: any) {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
      <div className="container-fluid">
        <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul
            className={classNames("navbar-nav flex-grow-1", styles.navigation)}
          >
            <li className="nav-item">
              <Link to="/" className={styles.navigation}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/podcasts" className={styles.navigation}>
                My Podcasts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className={styles.navigation}>
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav; */
