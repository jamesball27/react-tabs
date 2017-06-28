import React from 'react';
import Modal from 'react-modal';
import modalStyles from './modal_styles';

class TabContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  renderContent(content) {
    if (content) {
      return <p>{ content }</p>;
    }
  }

  renderImg(imgUrl) {
    if (imgUrl) {
      const handleClick = this.state.modalIsOpen ? this.closeModal : this.openModal;
      return(
        <img
          src={ imgUrl }
          onClick={ handleClick }
        />
      );
    }
  }

  render() {
    const { tabs, selectedTab } = this.props;
    const content = tabs[selectedTab].content;
    const imgUrl = tabs[selectedTab].img;

    return(
      <div className="tab-content">
        { this.renderContent(content) }
        { this.renderImg(imgUrl) }
        <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          contentLabel="Image Modal"
          style={ modalStyles }
        >
          { this.renderImg(imgUrl) }
        </Modal>
      </div>
    );
  }
}

export default TabContent;
