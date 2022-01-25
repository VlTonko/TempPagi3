import React from 'react';
import './App.css';
import axios from 'axios';
import Pictures from "./components/Pictures"
import Popup from "./components/Popup"
import Pagination from "./components/Pagination"

export const LIMIT = 100;
export const ITEMS_PER_PAGE = 20;

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        pictures: [], 
        bigPicture: '',
        currentPictures: [],
        currentPage: 1,
      };
  }

  componentDidMount() {
      this.querytodo();
  }

  querytodo = async () => {
      try {
          const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${LIMIT}`);
          this.setState({ pictures: data, currentPictures: data.slice(0, 20) });
      } catch (error) {
          return false;
      }
  };

  paintBigImage = (urlBigImg) => {
      this.setState({ bigPicture: urlBigImg });
  }

  closeBigImage = () => {
    this.setState({ bigPicture: '' });
  }


  render() {
    console.log(this.state.bigPicture);
      return (
          <div className="wrapper">
            <h1>HOLLA!!!</h1>
            <Pictures pictures={this.state.currentPictures} paintBigImage={this.paintBigImage}/>
            {this.state.bigPicture && <Popup urlBigPicture={this.state.bigPicture} closeBigImage={this.closeBigImage} /> }
            <Pagination pictures={this.state.pictures} pageCount={this.state.pageCount}/>
          </div>
      );
  }
}

export default App;