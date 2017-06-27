import React from 'react';
import { connect } from 'react-redux';
import { receiveSelectedTab } from '../actions/tab_actions';
import { arrayAllTabs } from '../reducers/selectors';
import TabsHeader from './tabs_header';
import TabContent from './tab_content';
import { CSSTransitionGroup } from 'react-transition-group';

class Tabs extends React.Component {

  render() {
    return(
      <div className="tabs-wrapper">
        <TabsHeader
          tabs={ this.props.tabs }
          selectedTab={ this.props.selectedTab }
          receiveSelectedTab={ this.props.receiveSelectedTab }
        />
        <CSSTransitionGroup
          transitionName="tab-content"
          transitionAppear={ true }
          transitionAppearTimeout={ 300 }
          transitionEnter={ true }
          transitionEnterTimeout={ 300 }
          transitionLeave={ false }
          key={ this.props.selectedTab }
        >
          <TabContent
            tabs={ this.props.tabs }
            selectedTab={ this.props.selectedTab }
          />
        </CSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tabs: arrayAllTabs(state),
  selectedTab: state.selectedTab
});

const mapDispatchToProps = dispatch => ({
  receiveSelectedTab: tabId => dispatch(receiveSelectedTab(tabId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
