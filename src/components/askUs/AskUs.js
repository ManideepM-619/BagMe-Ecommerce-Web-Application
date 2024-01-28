import React, {useState} from 'react';
import './AskUs.css'
const AskUs = () => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!question.trim()){
          alert('Please enter the question!');
          return;
        }
        alert('Question has been asked:' + question)
        console.log('Question submitted:', question)
        setQuestion('');
    };
  return (
    <div className='comtainers '>
      <h2 className='headings'>Ask Us</h2>
      <form className='forms' onSubmit={handleSubmit}>
        <label className='labels'>Your Question:</label>
        <textarea className="textareas" value={question} onChange={(e) => setQuestion(e.target.value)}
        placeholder='Type your question here...'/>
        <button onClick={handleSubmit}className='btns' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AskUs;