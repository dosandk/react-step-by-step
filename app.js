console.error('React', React);

const rootElement = document.getElementById('root');

class ControlledComponent extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello, React!</h1>
        <div className="description" style={{ color: this.props.color }}>
          This components renders child components
        </div>
        { this.props.children }
      </div>
    );
  }
}

class UncontrolledComponent extends React.Component {
  render () {
    return (
      <div>This is child component</div>
    );
  }
}

ReactDOM.render(
  <ControlledComponent color="red" >
    <UncontrolledComponent />
  </ControlledComponent>,
rootElement);
