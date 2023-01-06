import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import videos from 'json/db.json';
import styles from './Inicio.module.css';

function Inicio() {

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => 
                    <Card {...video} key={video.id} />
                )}
            </section>
        </>
    )
}

export default Inicio;