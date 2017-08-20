const rootElement = document.getElementById('root');

class List extends React.Component {
  render () {
    const arr = new Array(10).fill(1).map((item, i) => i++);

    return (
      <div>
        <h1>Hello, React!</h1>
        Render list:
        <ul>
          { arr.map(item => <ListItem key={item} />) }
        </ul>
      </div>
    );
  }
}

class ListItem extends React.Component {
  render () {
    return (
      <li>This is list element</li>
    );
  }
}

ReactDOM.render(<List color="red" />, rootElement);

