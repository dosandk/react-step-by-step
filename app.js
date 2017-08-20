console.error('React', React);

const rootElement = document.getElementById('root');

class StatefulComponent extends React.Component {
  constructor (...args) {
    super(...args);
  }

  render () {
    console.error('props', this.props);

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
  <h3>This is StatelessComponent</h3>
);

ReactDOM.render(<StatefulComponent color="red" />, rootElement);

const container = document.getElementById('container');

ReactDOM.render(<StatelessComponent />, container);
