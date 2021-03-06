// import { useEffect, useState } from "react";
import Seo from "./Seo";
// import Image from 'next/image';
import { useRouter } from "next/router";

function Home({results}) {
  const router = useRouter();
  const onClick = ({original_title, id, poster_path}) => {
    router.push({
      pathname: `/movie/${original_title}/${id}`,
      query: {
        poster: `${poster_path}`
      }
    }, `/movie/${original_title}/${id}`)
  }
  return (
    <div className="container">
      <Seo title={"Home"}/>
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => 
        <div className="movie" key={movie.id} onClick={() => onClick(movie)}>
          <img alt="movie clip" src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
          <h4 className="title">{movie.original_title}</h4>
        </div>)}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
          margin-top: 0.7rem;
        }
      `}</style>
    </div>
  )
}
export default Home;

export async function getServerSideProps() {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async() => {
  //     const {results, total_pages, total_results} = await(await fetch(`/api/movies`)).json();
  //     setMovies(results)
  //     console.log(results)
  //   })();
  // }, []);
  const {results} = await(await fetch(`http://localhost:3000/api/movies`)).json();
  return {props:{results}};
}