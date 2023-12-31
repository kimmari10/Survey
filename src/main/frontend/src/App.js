import './App.css';
import {useEffect, useState} from 'react';
import Question from "./Question";



let surveyDB = [
    {
        "idx": 1,
        "type": 1,
        "size": 1,
        "question": "기본정보",
        "answer": ""
    },
    {
        "idx": 2,
        "type": 2,
        "size": "",
        "question": "성별을 선택해주세요",
        "answer": ["남","여"]
    },
    {
        "idx": 3,
        "type": 3,
        "size": 2,
        "question": "거주한 지역을 선택하세요",
        "answer": ["서울","나주", "경상남도", "강원도"]
    },

]




function App() {
    const [survey, setSurvey] = useState([]);

    useEffect(() => {
        setSurvey(surveyDB)
    }, [])

    // useEffect(() => {
    //     // fetch(url, options) : Http 요청 함수
    //     fetch("http://localhost:9999/survey")
    //         .then(res => res.json())
    //         .then(survey => setSurvey(survey));
    // }, [])

    return (
        <div className="App">
            <h1>설문조사 참여</h1>
            <header className="App-header">
                {surveyDB.map(s => <Question key={s.idx} quest={s}/>)}
            </header>
        </div>
    );
}

export default App;