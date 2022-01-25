import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import Seo from "../Seo";

function InitialDetail({title, id, poster}) {
    return <>
        <h1>{title}</h1>
        {poster ? <img alt="movie poster" src={`http://image.tmdb.org/t/p/w500${poster}`}/> : ""}
    </>;
}
function LoadedDetail(movie) {
    const {movie: {title, poster, poster_path, genres, vote_average, release_date, tagline, overview, backdrop_path}} = movie;
    return <>
        <h1>{title}</h1>
        <img alt="poster" src={`http://image.tmdb.org/t/p/w500${poster_path}`}/>
        <ul>
            <li><h4>GENRE</h4></li>
            <ol>
            {genres?.map((el, ind) => <li key={ind}>{el.name}</li>)}
            </ol>
        </ul>
        <ul>
            <li>
                <h4>RELEASE DATE : {release_date}</h4>
            </li>
            <li>
                <h4>VOTES : {vote_average}/10</h4>
            </li>
        </ul>
        <h2>{tagline}</h2>
        <h3>{overview}</h3>
        <div className="bg" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w500${backdrop_path})`}}></div>
    </>
}
export default function Detail({params=[,], poster=''}) {
    const [title, id] = params;
    const [movie, setMovie] = useState();
    useEffect(() => {
        async function fetchJson() {
            let json = await (await fetch(`/api/movie/${id}`)).json();
            if(json.id) {
                setMovie(json)
            }                
        }
        fetchJson();        
    }, [id])
    return (
        <div className="container">
            <Seo title={`${title}`}/>
            {!movie? <InitialDetail title={title} id={id} poster={poster} /> : <LoadedDetail movie={movie}/>}
            <style jsx global>{`
                .container {
                    padding: 20px;
                }
              
                img {
                    position: relative;
                    width: 150px;
                    float: right;
                    margin: 0.5rem;
                    padding: 0.5rem;
                }
                ul {
                    font-weight: bold;
                }
                ol {
                    padding-left: 1.1rem;                    
                }
                .bg {
                    width: 100vw;
                    height: 100vh;
                    position: absolute;
                    top: 0;
                    left: 0;
                    filter: blur(3px) brightness(1.2) grayscale(0.8) opacity(0.5);
                    z-index: -1;                    
                }
            `}</style>
        </div>
    );
}


export async function getServerSideProps({query}) {
    return {props: query};
}