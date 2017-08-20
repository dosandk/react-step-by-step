console.error('React', React);

const rootElement = document.getElementById('root');

class ControlledComponent extends React.Component {
  constructor (...args) {
    super(...args);

    this.state = {
      value: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.error(`A name was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {
    console.error('render');
    return (
      <div>
        <h1>Hello, React!</h1>
        <div className="description" style={{ color: this.props.color }}>
          This is controlled component
        </div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} type="text"/>
          <input type="submit"/>
        </form>
        <div id="container" className="container"/>
      </div>
    );
  }
}

class UncontrolledComponent extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.error(`A name was submitted: ${this.input.value}`);
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <div>This is uncontrolled component</div>
        <form onSubmit={this.handleSubmit}>
          <input defaultValue="some value" type="text" ref={el => this.input = el} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ControlledComponent color="red" />, rootElement);

const container = document.getElementById('container');

ReactDOM.render(<UncontrolledComponent />, container);
