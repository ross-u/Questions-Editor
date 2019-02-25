import React from 'react';
import addButton from './../assets/add.png';

function AddButton(props) {
  return (
    <button style={styles} onClick={props.func}>
      <img src={addButton} alt=""/>
    </button>
  )
}

const styles = {
  border:'0',
  background: 'none',
  textDecoration: 'none',
  padding: '10px',
}

export default AddButton;