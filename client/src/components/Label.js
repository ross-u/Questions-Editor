import React from 'react';
import AddImage from './AddImage';
import DeleteIcon from './../assets/delete.png';

function Label(props) {
  const { index, label, labelType, value, handleChange, updateImage, deleteLabel } = props;

  return (
    <div style={styles.labelContainer[labelType]}>

      <a href="#!" onClick={() => deleteLabel(labelType, index)}>
        <img src={DeleteIcon} alt="" style={styles.deleteLabel[labelType]}/>
      </a>
      <div>
        <AddImage
          label={label}
          name={`${labelType}${index}`}
          updateImage={updateImage}
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <input
            name={`${labelType}${index}`}
            type='text'
            value={value || ''}
            placeholder={`${labelType}${index}`}
            onChange={handleChange}
            style={styles.labelInput[labelType]} />
        </label>
      </form>
    </div>
  )
}

const styles = {
  deleteLabel: {
    row: {
      width: '13px',
      height: '13px',
      position: 'relative',
      left: '-5px'
    },
    col: {
      width: '13px',
      height: '13px',
      position: 'relative',
      top: '-2px',
    }
  },
  labelContainer: {
    row: {
      display: 'flex',
      alignItems: 'center',
      position:'relative',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      width: '90px',
      height: '60px',
      padding: '5px',
      marginTop: '15px',
    },
    col: {
      display: 'flex',
      position:'relative',
      flexDirection: 'column',
      width: '50px',
      height: '70px',
      marginLeft: '10px',
      padding: '10px 10px 0px 10px',
      textAlign: 'center',
    },
  },
  labelInput: {
      row: {
        height: '20px',
        width: '50px',
        textAlign: 'center',
      },
      col: {
        marginTop: '5px',
        height: '20px',
        width: '50px',
        textAlign: 'center',
      }
  },
}

export default Label;