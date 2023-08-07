import './App.css';
import {useEffect, useState} from 'react';
import Question from "./Question";

function App() {
    const survey = [
        {
            "id": 1,
            "type": "rdo",
            "question": "성별을 선택해주세요",
            "answer": ["남","여"]
        },
        {
            "id": 2,
            "type": "chk",
            "question": "거주한 지역을 선택하세요",
            "answer": ["서울","나주", "경상남도", "강원도"]
        }
    ]

    //const [survey, setSurvey] = useState({});

    // useEffect(() => {
    //     // fetch(url, options) : Http 요청 함수
    //     fetch("http://localhost:9999/survey")
    //         .then(res => res.json())
    //         .then(survey => setSurvey(survey));
    // }, [])

    return (
        <div className="App">
            <header className="App-header">

                {survey.map(s => <Question question={s.question} key={s.id}/>)}
            </header>
        </div>
    );
}

export default App;