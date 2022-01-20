import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../Seo";

export default function Detail({params:[title, id], poster=""}) {
    console.log("Detail", title, id, poster);
    // console.log(router.query);
    // const {query:{params}} = useRouter();
    // console.log(params);
    // const {params:[title, id]} = params;
    // const {params:[title, id], poster} = query||{params:[], poster:""};
    const [movie, setMovie] = useState();
    useEffect(() => {
        (async() => {
            const json = await (await fetch(`http://localhost:3000/api/movie/${id}`)).json();
            setMovie(json);
            console.log(json);
        })();
    }, [])
    return (
        <div>
            <Seo title={"Detail"}/>
            <h1>{title}</h1>
            {poster ? <img alt="movie poster" src={`http://image.tmdb.org/t/p/w500${poster}`}/> : ""}
            {movie ? movie.genres.map((el, ind) => <span key={ind}>{el.name}</span>) : ""}
            {movie ? `${movie.vote_average}/10` : ""}
            {movie ? `${movie.release_date}` : ""}
            {movie ? `${movie.tagline}` : ""}
            {movie ? `${movie.overview}` : ""}
            {movie ? <img alt="movie poster" src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}/> : ""}
            {movie ? <img alt="movie clip" src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/> : ""}
        </div>
    );
}


export function getServerSideProps({query}) {
    return {props: query};
}