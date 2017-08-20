import React, {Component} from 'react';
import {articles} from '../../mocks';

class ListItem extends Component {
  render () {
    return (
      <div className="article">
        <div><b>date:</b> {this.props.item.date}</div>
        <div><b>title:</b> {this.props.item.title}</div>
        <div><b>text:</b> {this.props.item.text}</div>
        <div>
          <button>edit article</button>
          <button onClick={this.props.deleteItem}>delete article</button>
        </div>
      </div>
    );
  }
}

export default class List extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      articles,
      title: '',
      text: ''
    };

    this.onInputChanged = this.onInputChanged.bind(this);
    this.addArticle = this.addArticle.bind(this);
  }

  deleteArticle (id) {
    return () => {
      const articles = this.state.articles.filter(item => item.id !== id);

      this.setState({articles});
    }
  }

  addArticle (e) {
    e.preventDefault();
    const {title, text} = this.state;
    const article = {
      id: Date.now(),
      text,
      title,
      date: new Date().toString()
    };

    this.setState({articles: [article, ...this.state.articles]})
  }

  onInputChanged (e) {
    const field = e.target.name;
    const {value} = e.target;

    this.setState({[field]: value});
  }

  render () {
    return (
      <div>
        <form onSubmit={this.addArticle}>
          <h2>Create article</h2>
          <div>
            <input className="parent-size"
                   value={this.state.title}
                   name="title"
                   onChange={this.onInputChanged}
                   placeholder="title"
                   type="text"/>
          </div>
          <div>
            <textarea className="parent-size"
                      value={this.state.text}
                      name="text"
                      onChange={this.onInputChanged}
                      placeholder="text" />
          </div>
          <input value="Create article" type="submit"/>
        </form>
        <ul>
          { this.state.articles.map(item => <ListItem key={item.id} item={item} deleteItem={this.deleteArticle(item.id)} />) }
        </ul>
      </div>
    );
  }
}

