import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./movieCollection.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { movie } from "../types/movie";

// Print out movies by calling api
function MovieCollection(props: any) {
  document.title = props.saying;
  //want multiline
  const [listOMovies, setMovieData] = useState<movie[]>([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch("https://localhost:4000/movie");
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchMovie();
  }, []);

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
                {listOMovies
                  .filter((m) => m.edited === "Yes")
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((m) => (
                    // <tr key={m.MovieId}>
                    <tr>
                      <td>{m.title}</td>
                      <td>{m.year}</td>
                      <td>{m.director}</td>
                      <td>{m.rating}</td>
                      <td>{m.category}</td>
                      <td>{m.edited}</td>
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
