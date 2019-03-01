import React from 'react';
import AddImage from './AddImage';
import M from 'materialize-css';
import Textarea from 'react-textarea-autosize';

function Label(props) {
  const { index, label, labelType, value, labelMethods } = props;
  const { handleLabelChange, updateImage, deleteLabel } = labelMethods;

  M.AutoInit();

  return (
    <div style={styles.labelContainer[labelType]}>

      <a href="#!" onClick={() => deleteLabel(labelType, index)}>
        <i className="xsmall material-icons" style={styles.deleteLabel[labelType]}>close</i>
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
          <Textarea
            name={`${labelType}${index}`}
            type='text'
            value={value || ''}
            placeholder={`${labelType}${index}`}
            onChange={(e) => handleLabelChange(e, labelType)}
            style={styles.labelInput[labelType]}
          />
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
      left: '-10px',
      color: 'black',
      fontSize: '14px',
    },
    col: {
      width: '13px',
      height: '13px',
      position: 'relative',
      top: '-2px',
      left: '6px',
      color: 'black',
      fontSize: '14px'
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
      height: 'auto',
      padding: '5px',
      marginTop: '15px',
      marginBottom: '15px',
    },
    col: {
      display: 'flex',
      position:'relative',
      flexDirection: 'column',
      width: '50px',
      height: 'auto',
      marginLeft: '40px',
      padding: '10px 10px 10px 10px',
      textAlign: 'center',
    },
  },
  labelInput: {
    row: {
      width: '100px',
      textAlign: 'center',
      marginBottom: '0px',
      marginLeft: '10px',
      marginRight: '50px',
      fontSize: '12px',
      resize: 'none',
      maxHeight: '100px',
      overflow: 'hidden',
      verticalAlign: 'middle',
      border: 'none',
    },
    col: {
      marginTop: '5px',
      width: '70px',
      marginLeft: '-12px',
      textAlign: 'center',
      resize: 'none',
      maxHeight: '100px',
      overflow: 'hidden',
      verticalAlign: 'middle',
      border: 'none',
    }
  },
}

export default Label;