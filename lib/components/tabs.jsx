import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { receiveSelectedTab } from '../actions/tab_actions';
import { arrayAllTabs } from '../reducers/selectors';
import TabsHeader from './tabs_header';
import TabContent from './tab_content';

const Tabs = props => {
  const { tabs, selectedTab } = props;
  return(
    <div className="tabs-wrapper">
      <TabsHeader
        tabs={ tabs }
        selectedTab={ selectedTab }
        receiveSelectedTab={ props.receiveSelectedTab }
      />
      <CSSTransitionGroup
        transitionName="tab-content"
        transitionAppear={ true }
        transitionAppearTimeout={ 300 }
        transitionEnter={ true }
        transitionEnterTimeout={ 300 }
        transitionLeave={ false }
        key={ selectedTab }
      >
        <TabContent
          tabs={ tabs }
          selectedTab={ selectedTab }
        />
      </CSSTransitionGroup>
    </div>
  );
};

const mapStateToProps = state => ({
  tabs: arrayAllTabs(state),
  selectedTab: state.selectedTab
});

const mapDispatchToProps = dispatch => ({
  receiveSelectedTab: tabId => dispatch(receiveSelectedTab(tabId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
