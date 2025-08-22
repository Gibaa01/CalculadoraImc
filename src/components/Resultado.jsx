import'../css/global.css'
import '../css/resultado.css'

const TabelaImc=(resultado)=>{
    if(resultado<18){
        return(
            <>
            <td>Abaixo do Peso</td>
            <td>Abaixo de 18</td>
            </>
        );
    }else if(resultado > 18 && resultado <25){
        return(
            <>
            <td>peso normal</td>
            <td>18 - 25.9</td>
            </>
        );

    }else if(resultado >24 && resultado <30){
        return(
            <>
            <td>sobre peso</td>
            <td>25 - 29.9</td>
            </>
        );
    }else if(resultado > 29 && resultado <35){

        return(
            <>
            <td>obesidade Grau 1</td>
            <td>30 - 34.9</td>
            </>
        )
    }else{
        return(
            <>
            <td>obesidade Mórbida </td>
            <td>Maior ou igual 40</td>
            </>
        )
    }
}
//destruct -desestruturação = acessa propriedades de outros componentes 
function Resultado({resultado}){
    return(
        <>
        <div>
            <div className="resultado">
                <h2>
                    Seu IMC é de:<span className="imcSpan">{resultado}</span>
                </h2>

            </div>
            <table className="tabela">
                <thead className="tabelaHeader">
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className="tabelaBody">
                    <tr>{TabelaImc(resultado)}</tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Resultado