import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio (){
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
            <Card id="1" titulo="Vingadores" capa="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg" />
            <br/>
            <Rodape />
        </>
    );
}

export default Inicio;