import ChkQuestion from "./ChkQuestion";
import RdoQuestion from "./RdoQuestion";

function Question(prop) {

    if(prop.type === "chk") {
        return <ChkQuestion question={prop.question}/>
    } else if(prop.type === "rdo") {
        return <RdoQuestion question={prop.question}/>
    }
}

export default Question;