import {useSelector} from "react-redux";

function Radios(prop) {
    const question = useSelector(state => state.question);

    return (
        <div className="question">{question}</div>
    );
}

export default Radios;