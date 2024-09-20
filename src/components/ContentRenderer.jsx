import { useContext } from "react";
import { questionsContext } from "../store/questionsContextProvider";
import Question from './Questions/Question';
import Start from './Start';
import Results from './Results/Reuslts';

export default function ContentRenderer() {
    const { content } = useContext(questionsContext);
    return (
        <>
            {content == 'start' ? <Start /> : content === 'results' ? <Results /> : <Question />}
        </>
    )
}