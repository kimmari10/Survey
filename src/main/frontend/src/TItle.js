import styled from "styled-components";
import {useSelector} from "react-redux";

//TODO
const styledP = styled.p`
  font-size: 2rem;
  color:blue;
`

function Title(prop) {
    let prefix = "";
    let fontSize = 16;

    const size = useSelector(state => state.size);
    const question = useSelector(state => state.question);

    switch (size) {
        case 1:
            prefix = "■ ";
            // fontSize = fontSize * prop.size;
            break;
        case 2:
            prefix = "  ";
            // fontSize = fontSize * prop.size;
            break;
        case 3:
            prefix = " - ";
            // fontSize = fontSize * prop.size;
            break;

    }


    return (
        <p>{prefix}{question}</p>
    );
}

export default Title;