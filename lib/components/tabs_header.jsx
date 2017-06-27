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
    this.setScrollInterval('left');
  }

  scrollRight() {
    this.setScrollInterval('right');
  }

  // this only works if there are two 'pages' of tabs
  // if there are more than two pages it will skip any in between
  setScrollInterval(direction) {
    let bound, scroll;
    if (direction === 'right') {
      bound = this.ul.scrollWidth - this.ul.offsetWidth;
      scroll = () => { this.ul.scrollLeft += 4; };
    } else {
      bound = 0;
      scroll = () => { this.ul.scrollLeft -= 4; };
    }

    const interval = setInterval(() => {
      if (this.ul.scrollLeft === bound) {
        clearInterval(interval);
        this.setState({ scrollPosition: direction });
      } else {
        scroll();
      }
    }, 1);
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
