import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps
)(App);
