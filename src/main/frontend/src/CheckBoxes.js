import {useSelector} from "react-redux";

function CheckBoxes(prop) {
    const question = useSelector(state => state.question);

    return (
        <div className="question">{question}</div>
    );
}

export default CheckBoxes;