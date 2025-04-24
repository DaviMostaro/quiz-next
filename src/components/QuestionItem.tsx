import { Question } from "@/types/Question"
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}


export const QuestionItem = ({question, count, onAnswer}: Props) => {

    const[selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);

            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
            }, 2000);
        }
    }

    return(
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.answers.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 hover:opacity-60
                            
                            ${selectedAnswer !== null && 'cursor-auto hover:opacity-100'}
                            ${selectedAnswer !== null && selectedAnswer === question.correctAnswer && selectedAnswer === key && 'bg-green-100 border-green-300'} 
                            ${selectedAnswer !== null && selectedAnswer !== question.correctAnswer && selectedAnswer === key && 'bg-red-100 border-red-300'} 
                            `}
                        >{item}</div>
                ))}
            </div>
        </div>
    )
}