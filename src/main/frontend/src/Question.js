import CheckBoxes from "./CheckBoxes";
import Radios from "./Radios";
import Title from "./TItle";
import TextArea from "./TextArea";
import Image from "./Image";
import Text from "./Text";
import {legacy_createStore as createStore} from 'redux'
import {Provider} from "react-redux";
import {useEffect, useState} from "react";



function Question(prop) {
    const typeMap = {
        1:"title",
        2:"rdo",
        3:"chk",
        4:"textarea",
        5:"image",
        6:"text"
    }

    function reducer(currentState = prop.quest, action) {
        return {...currentState};
    }
    const store = createStore(reducer);

    const type = prop.quest.type;

    switch(typeMap[type]) {
        case "title":
            return <Provider store={store}><Title/></Provider>
        case "rdo":
            return <Provider store={store}><Radios/></Provider>
        case "chk":
            return <Provider store={store}><CheckBoxes/></Provider>
        case "textarea":
            return <Provider store={store}><TextArea/></Provider>
        case "image":
            return <Provider store={store}><Image/></Provider>
        case "text":
            return <Provider store={store}><Text/></Provider>
        default:
            return null;
    }
}

export default Question;