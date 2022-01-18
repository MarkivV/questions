import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({title, info}) => {
    const [readMore, setReadMore] = useState(false)
    const readMoreFun = () =>{
        setReadMore(!readMore)
    }
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={readMoreFun}>{readMore? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </header>
            {readMore && <p>{info}</p>}
        </article>
    );
};

export default SingleQuestion;