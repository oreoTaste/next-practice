// import { useEffect, useState } from "react";
import Seo from "./Seo";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";

function Home({results}) {
  const router = useRouter();
  const onClick = ({original_title, id}) => {
    router.push({
      pathname: `/movie/${id}`,
      query: {
        title: `${original_title}`
      }
    }, `movie/${id}`)
  }
  return (
    <div>
      <Seo title={"Home"}/>
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => 
        <div key={movie.id}>
          <Image alt="movie clip" src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} width={"100px"} height={"100%"} />
          <span className="title" onClick={() => onClick(movie)}>{movie.original_title}</span>
        </div>)}
      <style jsx>{`
        .title {
          cursor: pointer;
          display: block;
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