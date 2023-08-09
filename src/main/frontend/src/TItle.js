function Title(prop) {
    let prefix = "";
    let fontSize = 16;

    switch (prop.size) {
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
        <div>{prop.question}</div>
    );
}

export default Title;