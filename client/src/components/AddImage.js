import React, { Component } from "react";
import addImageButton from "./../assets/addImage.png";
import axios from "axios";

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
                  <img style={styles.addImageBtn} src={addImageButton} alt="" />
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
    width: "50px",
    height: "50px",
  },
  addBtnWrapper: {
    textAlign: 'center',
  },
  addImageBtn: {
    marginTop: '6px',
    padding: '10px',
    background: '#E0E0E0',

  },
};

export default AddButton;
