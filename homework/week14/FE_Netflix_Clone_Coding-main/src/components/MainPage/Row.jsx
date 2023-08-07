import { useEffect, useState } from "react";
import axios from "../../api/axios";
import MovieModal from "../MovieModal/MovieModal";
import { RowContainer, RowPosters, RowPoster, RowTitle } from "./Styled";

export default function Row({ isLarge, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // fetchUrl이 변화할 때마다 fetchMovieData를 실행
  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  // 비동기 함수
  const fetchMovieData = async () => {
    // 받아온 fetchUrl로 GET 요청
    const request = await axios.get(fetchUrl);
    console.log(request);

    setMovies(request.data.results);
  };
  console.log(movies);

  const [modalOpen, setModalOpen] = useState(false);

  const [movieSelected, setMovieSelected] = useState({});

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
      <RowContainer>
        <RowTitle>{title}</RowTitle>
        <RowPosters>
          {movies.map((movie) => (
            <RowPoster
              key={movie.id}
              islarge={isLarge ? "true" : "false"}
              src={`https://image.tmdb.org/t/p/original/${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </RowPosters>
      </RowContainer>
    </>
  );
}
