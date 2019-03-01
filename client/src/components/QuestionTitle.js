import React from 'react';
import Textarea from 'react-textarea-autosize';

function QuestionTitle(props) {
  const {handleChange, value} = props;
  
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor=''>
          <Textarea
            type='text'
            value={value}
            onChange={handleChange}
            placeholder='Question Title'
            style={styles.questionInput}
          />
        </label>
      </form>
    </div>
  )
}

const styles = {
  questionInput: {
    fontSize: '26px',
    width: '90%',
    margin: '10px',
    marginLeft: '10',
    resize: 'none',
    maxHeight: '100px',
    overflow: 'hidden',
    border: 'none',
    borderBottom: '1px solid gray',
  }
}
export default QuestionTitle;