import React from 'react';

class TabsHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scrollPosition: "left" };
    this.tabCount = this.props.tabs.length;
    this.handleClick = this.handleClick.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  handleClick(tabId) {
    return e => {
      e.preventDefault();
      this.props.receiveSelectedTab(tabId);
    };
  }

  selectedClassName(tabId) {
    if (tabId === this.props.selectedTab) { return 'selected'; }
  }

  scrollLeft() {
    const interval2 = setInterval(() => {
      if (this.ul.scrollLeft === 0) {
        clearInterval(interval2);
      } else {
        this.ul.scrollLeft -= 10;
      }
    }, 10);

    this.setState({ scrollPosition: 'left' });
  }

  scrollRight() {
    const interval = setInterval(() => {
      if (this.ul.scrollLeft === 230) {
        clearInterval(interval);
      } else {
        this.ul.scrollLeft += 10;
      }
    }, 10);

    this.setState({ scrollPosition: 'right' });
  }

  render() {
    let arrow;
    if (this.state.scrollPosition === 'right') {
      arrow = <span onClick={ this.scrollLeft } className="arrow left">❰</span>;
    } else {
      arrow = <span onClick={ this.scrollRight } className="arrow right">❱</span>;
    }

    return(
      <div className="tabs-header-wrapper">
        { arrow }
        <ul className="tabs-header" ref={ ul => {this.ul = ul;}}>
          {
            this.props.tabs.map(tab => (
              <li
                key={ tab.id }
                onClick={ this.handleClick(tab.id) }
                className={ tab.id === this.props.selectedTab ? 'selected' : '' }
              >
                <span>{ tab.header }</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TabsHeader;
