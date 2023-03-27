import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./movieCollection.module.css";
import classNames from "classnames";
import { useState } from "react";
import data from "./MovieData.json";

const mds = data.MovieData;

function MovieCollection() {
  document.title = "Movie Collection";
  //want multiline
  const [listOMovies] = useState(mds);

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
          <h1 className="masthead-heading text-uppercase mb-0">
            Joel Hilton's Movie Collection
          </h1>
          {/* Subheading */}
          <p className="masthead-subheading font-weight-light mb-0">
            take a look
          </p>
        </div>
      </header>
      <section className="page-section portfolio" id="portfolio">
        <div className={classNames("container", styles.center)}>
          {/* Table */}
          <div>
            <table className="table table-hover" style={{ textAlign: "left" }}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Director</th>
                  <th>Rating</th>
                  <th>Category</th>
                  <th>Edited</th>
                </tr>
              </thead>
              <tbody>
                {listOMovies.map((m) => (
                  // <tr key={m.MovieId}>
                  <tr>
                    <td>{m.Title}</td>
                    <td>{m.Year}</td>
                    <td>{m.Director}</td>
                    <td>{m.Rating}</td>
                    <td>{m.Category}</td>
                    <td>{m.Edited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieCollection;
