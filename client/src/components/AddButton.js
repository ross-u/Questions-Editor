import React from 'react';
import M from 'materialize-css';

function AddButton(props) {
  M.AutoInit();
  return (
    <button
      style={styles.addButton[props.name]}
      className="btn-floating btn-medium waves-effect waves-light cyan darken-3 add-question-btn center-align"
      onClick={props.func}
    >
      <i className="medium material-icons">playlist_add</i>
    </button>

  )
}

const styles = {
  addButton :{
    row: {
      margin: '0',
      marginTop: '30px',
      marginLeft: '-50px',
    },
    column: {
      marginLeft: '35px',
      marginTop: '37px',
    },
  },
}

export default AddButton;