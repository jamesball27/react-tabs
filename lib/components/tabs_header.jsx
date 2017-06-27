import React from 'react';

class TabsHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
      pageCount: 1,
    };

    this.handleClick = this.handleClick.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.renderLeftArrow = this.renderLeftArrow.bind(this);
    this.renderRightArrow = this.renderRightArrow.bind(this);
  }

  componentDidMount() {
    const ulWidth = this.ul.offsetWidth;
    const scrollWidth = this.ul.scrollWidth;
    const pageCount = Math.ceil(scrollWidth / ulWidth);
    const scrollAmount = Math.floor(scrollWidth / pageCount);
    const scrollMax = scrollWidth - ulWidth;

    this.setState({
      ulWidth,
      scrollWidth,
      pageCount,
      scrollAmount,
      scrollMax
    });
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

  setScrollInterval(direction) {
    const { scrollAmount, scrollMax } = this.state;

    let bound, scroll, pageNumber;
    if (direction === 'right') {
      bound = this.ul.scrollLeft + scrollAmount;
      if (bound > scrollMax) { bound = scrollMax; }
      scroll = () => { this.ul.scrollLeft += 1; };
      pageNumber = this.state.pageNumber + 1;
    } else {
      bound = this.ul.scrollLeft - scrollAmount;
      if (bound < 0) { bound = 0; }
      scroll = () => { this.ul.scrollLeft -= 1; };
      pageNumber = this.state.pageNumber - 1;
    }

    const interval = setInterval(() => {
      if (this.ul.scrollLeft === bound) {
        clearInterval(interval);
        this.setState({ pageNumber });
      } else {
        scroll();
        console.log(this.ul.scrollLeft);
      }
    }, 1);
  }

  renderRightArrow() {
    if (this.state.pageNumber < this.state.pageCount) {
      return <span onClick={ this.scrollRight } className="arrow right">❱</span>;
    }
  }

  renderLeftArrow() {
    if (this.state.pageNumber > 1) {
      return <span onClick={ this.scrollLeft } className="arrow left">❰</span>;
    }
  }

  render() {
    return(
      <div className="tabs-header-wrapper">
        { this.renderLeftArrow() }
        <ul className="tabs-header" ref={ ul => {this.ul = ul;}} id="ul">
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
        { this.renderRightArrow() }
      </div>
    );
  }
}

export default TabsHeader;
