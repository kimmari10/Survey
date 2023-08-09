import CheckBoxes from "./CheckBoxes";
import Radios from "./Radios";
import Title from "./TItle";
import TextArea from "./TextArea";
import Image from "./Image";
import Text from "./Text";

function Question(prop) {
    const typeMap = {
        1:"title",
        2:"rdo",
        3:"chk",
        4:"textarea",
        5:"image",
        6:"text"
    }
    switch(typeMap[prop.type]) {
        case "title":
            return <Title question={prop.question}/>
        case "rdo":
            return <Radios question={prop.question}/>
        case "chk":
            return <CheckBoxes question={prop.question}/>
        case "textarea":
            return <TextArea question={prop.question}/>
        case "image":
            return <Image question={prop.question}/>
        case "text":
            return <Text question={prop.question}/>
        default:
            return null;
    }
}

export default Question;