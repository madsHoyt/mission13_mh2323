import classNames from "classnames";
import styles from "./home.module.css";

function Home() {
  document.title = "Home - Joel Hilton's Film Collection";
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
          <h1 className="masthead-heading text-uppercase mb-0">Welcome</h1>
          {/* Subheading */}
          <p className="masthead-subheading font-weight-light mb-0">
            to Joel Hilton's Movie Collection
          </p>
        </div>
      </header>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* Subheading */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            This website is just a collection of movies
          </h2>
        </div>
      </section>
    </>
  );
}

export default Home;
