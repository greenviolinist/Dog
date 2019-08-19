import React from 'react';

class RandomDogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          this.props.randomDog(this.state.userInput)
        }}>
          <input
            value={this.state.userInput}
            onChange={this.handleChange}
            placeholder="ie. Shiba type dog breed"
          />
          <button>Get random dog pic</button>
        </form>
        <div className="img-dog">
          {this.props.dogPic && (
            <img src={this.props.dogPic} alt="little angel"/>
          )}
        </div>
      </div>
    )
  }
}

export default RandomDogs;