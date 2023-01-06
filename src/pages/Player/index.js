import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import { useParams } from "react-router-dom";
import styles from './Player.module.css';
import videos from 'json/db.json';
import NotFound from "pages/NotFound";

function Player() {

    const parametros = useParams()

    const video = videos.find((video) => {
        return video.id === Number(parametros.id)
    })

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Assistir Trailer</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;