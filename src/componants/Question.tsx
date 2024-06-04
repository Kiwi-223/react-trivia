// import React from 'react'
import triviaList from "../assets/triviaList";

interface Props {
  qIndex: number
}

export const Question = ({qIndex}: Props) => {
   return <div>
    <h2>{triviaList[qIndex].question}</h2>
   </div>;
};
