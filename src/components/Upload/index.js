import React from 'react';
import styles from './styles.module.scss';

let arrayFiles;

class UploadPage extends React.Component {
  state = {
    allFiles: [],
  };

  changeUpload = e => {
    e.preventDefault();
    this.setState({
      allFiles: [].concat(arrayFiles, [...e.target.files]),
    });
  };

  handleClick = e => {
    arrayFiles.map((f, i) => {
      if (f.name === e.target.className) {
        arrayFiles.splice(i, 1);
        this.setState({
          allFiles: arrayFiles,
        });
      }
    });
  };

  componentDidUpdate() {}

  render() {
    arrayFiles = [...this.state.allFiles];
    return (
      <div className={styles.uploadPage}>
        <h1>UploadPage</h1>
        <input type="file" multiple onChange={this.changeUpload}></input>
        <ul onClick={this.handleClick}>
          {arrayFiles.map(f => {
            return (
              <li key={f.lastModified}>
                <p>{f.name}</p>
                <p>size: {Math.round(f.size / 1024) + 'kb'}</p>
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
