import {useSelector} from "react-redux";

function Radios(prop) {
    const idx = useSelector(state => state.idx);
    const question = useSelector(state => state.question);

    return (
        <div className="question">{idx} - {question}</div>
    );
}

export default Radios;