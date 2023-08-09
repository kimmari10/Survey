import CheckBoxes from "./CheckBoxes";
import Radios from "./Radios";
import Title from "./TItle";
import TextArea from "./TextArea";
import Image from "./Image";
import Text from "./Text";
import {useSelector} from "react-redux";

function Question(prop) {
    const typeMap = {
        1:"title",
        2:"rdo",
        3:"chk",
        4:"textarea",
        5:"image",
        6:"text"
    }
    useSelector(state => console.log(state.type));
    const type = useSelector(state => state.type);

    switch(typeMap[type]) {
        case "title":
            return <Title/>
        case "rdo":
            return <Radios/>
        case "chk":
            return <CheckBoxes/>
        case "textarea":
            return <TextArea/>
        case "image":
            return <Image/>
        case "text":
            return <Text/>
        default:
            return null;
    }
}

export default Question;