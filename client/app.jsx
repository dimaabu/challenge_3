class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (

        <div>
           <form>
               <label>Enter your name </label>
               <input>
               
               </input>
           </form>
        </div>
        <button
          className="square"
          onClick={() => this.setState({value: 'X'})}

      
          //using arrow function when the button clicked x appear
        >
          {this.state.value}
        </button>
      );
    }
  }