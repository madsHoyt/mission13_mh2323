import classNames from "classnames";
import styles from "./podcasts.module.css";
import { Link } from "react-router-dom";

function Podcasts() {
  document.title = "My Podcasts";
  return (
    <>
      <header
        className={classNames(
          "masthead text-white text-center",
          styles.headerStyle
        )}
        style={{ lineHeight: "70px" }}
      >
        <div className="container d-flex align-items-center flex-column">
          {/* Heading */}
          <h1 className="masthead-heading text-uppercase mb-0">My Podcasts</h1>
          {/* Subheading */}
          <p className="masthead-subheading font-weight-light mb-0">
            take a listen
          </p>
        </div>
      </header>
      <section className="page-section portfolio" id="portfolio">
        <div className={classNames("container", styles.center)}>
          {/* Subheading */}
          <Link
            className={classNames(
              "btn btn-xl rounded-pill mt-5",
              styles.btnpink
            )}
            to="https://baconsale.com/"
            target="blank"
          >
            Baconsale
          </Link>
        </div>
      </section>
    </>
  );
}

export default Podcasts;
