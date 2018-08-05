import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Accordion from '../components/accordion';

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accordion);
