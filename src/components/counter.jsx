import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClassName()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClassName = () => {
    let badgeClass = 'badge m-2 bg-';
    return this.props.counter.value === 0
      ? badgeClass + 'warning'
      : badgeClass + 'primary';
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  };
}

export default Counter;
