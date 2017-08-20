console.error('React', React);

const rootElement = document.getElementById('root');

class StatefulComponent extends React.Component {
  constructor (...args) {
    super(...args);
  }

  componentWillMount () {
    console.error('componentWillMount');
  }

  componentDidMount() {
    console.error('componentDidMount');
  }

  componentWillReceiveProps () {
    console.error('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.error('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.error('componentWillUpdate');
  }

  componentDidUpdate() {
    console.error('componentDidUpdate');
  }

  componentWillUnmount() {
    console.error('componentWillUnmount');
  }

  render () {
    console.error('render');

    return (
      <div>
        <h1>Hello, React!</h1>
        <div className="description" style={{ color: this.props.color }}>
          This is JSX it's a syntax extension to JavaScript
        </div>
        <h2>This is StatefulComponent</h2>
        <div id="container" />
      </div>
    );
  }
}

const StatelessComponent = () => (
  <div>
    <h3>This is StatelessComponent</h3>
    <button onClick={() => {
      ReactDOM.render(<StatefulComponent color="green" />, rootElement);
    }}>
      Update parent component
    </button>
  </div>
);

ReactDOM.render(<StatefulComponent color="red" />, rootElement);

const container = document.getElementById('container');

ReactDOM.render(<StatelessComponent />, container);
