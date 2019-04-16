import React, { Component } from 'react';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      <ListItem key={number.toString()}
                value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function NumberListEmbedding(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
          value={number} />
      )}
    </ul>
  );
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'List and Keys', content: 'Wonderful, Amazing'},
  {id: 2, title: 'Remember', content: 'Keys Must Only Be Unique Among Siblings.'}
];

const oddNumbers = [1, 3 ,5, 7]; 
const evenNumbers = [2, 4, 6, 8];

class List extends Component {
  render() {
      return(
        <div>
          <Blog posts={posts} />
          <NumberList numbers={oddNumbers} />
          <NumberListEmbedding numbers={evenNumbers} />
        </div>
      );
  }
}

export default List;