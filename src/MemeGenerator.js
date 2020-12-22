import { Component } from 'react';

export default class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: [],
    };
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <button>Gen</button>
        </form>
      </div>
    );
  }
}
