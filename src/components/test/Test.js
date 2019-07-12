import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          title: data.title,
          body: data.body
        });
      });
  }

  //   componentWillMount() {
  //     console.log("Component Will Mount");
  //   }

  //   componentDidUpdate() {
  //     console.log("Component Did Update");
  //   }

  //   componentWillUpdate() {
  //     console.log("Component Will Update");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("Component Will Receive Props");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <h5>{body}</h5>
      </div>
    );
  }
}

export default Test;
