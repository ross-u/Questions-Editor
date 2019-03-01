import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";
  
class AddButton extends Component {
  state = {
    selectedFile: null,
    currentLabel: {}
  };

  triggerFileInput = (e) => {
    e.preventDefault();
    this.fileInput.click();
  }

  fileSelectedHandler = async e => {
    await this.setState({ selectedFile: e.target.files[0] });
    this.fileUploadHandler();
  };

  fileUploadHandler = () => {
    const url = "http://localhost:3000/image/";
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);

    axios
      .post(url, fd, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        const labelType = this.props.name.slice(0, 3);
        this.props.updateImage(labelType, this.props.name, res.data);
      })
      .catch(err => console.error("Image upload error", err));
  };

  componentDidMount() {      
    M.AutoInit();
  }


  render() {
    const { label } = this.props;
    return (
      <div>
        <form action="/action_page.php">
          <input
            type="file"
            onChange={this.fileSelectedHandler}
            style={{ display: "none" }}
            ref={fileInput => (this.fileInput = fileInput)}
          />
          {
            (!label.image)
              ? (<a style={styles.addBtnWrapper} href="#!" onClick={this.triggerFileInput}>
                <button
                  style={styles.addImageBtn}
                  className="btn waves-effect waves-light teal lighten-2 add-question-btn center-align z-depth-2"
                >
                  <i className="medium material-icons">add_photo_alternate</i>
                </button>
                </a>)
              : (<img src={label.image} alt="" style={styles.labelImage} />)
          }
        </form>
      </div>
    );
  }
}

const styles = {
  labelImage: {
    border: "0",
    background: "none",
    textDecoration: "none",
    width: "48px",
    height: "48px",
    margin: '0',
    marginBottom: '0px',
    boxShadow: '2px 3px 4px 1px rgba(0,0,0,0.18)',
  },
  addBtnWrapper: {
    textAlign: 'center',
  },
  addImageBtn: {
    width: '48px',
    height: '48px',
    paddingTop: '5px',
    margin: '0',
    marginBottom: '5px',
  },
};

export default AddButton;
