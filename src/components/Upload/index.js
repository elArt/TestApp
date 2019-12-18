import React from 'react';
import styles from './styles.module.scss';

class UploadPage extends React.Component {
  state = {
    allFiles: [],
  };

  changeUpload = e => {
    e.preventDefault();
    this.setState({
      allFiles: [].concat(this.state.allFiles, [...e.target.files]),
    });
  };

  handleClick = e => {
    [...this.state.allFiles].map((f, i) => {
      if (f.name === e.target.className) {
        let newArray = [...this.state.allFiles];
        newArray.splice(i, 1);
        this.setState({
          allFiles: newArray,
        });
      }
    });
  };

  componentDidUpdate() {}

  render() {
    return (
      <div className={styles.uploadPage}>
        <h1>UploadPage</h1>
        <input type="file" multiple onChange={this.changeUpload}></input>
        <ul onClick={this.handleClick}>
          {[...this.state.allFiles].map(f => {
            let size = Math.round(f.size / 1024) + 'kb';
            return (
              <li key={f.lastModified}>
                <p>{f.name}</p>
                <p>size: {size}</p>
                <span className={f.name}>Х</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UploadPage;
