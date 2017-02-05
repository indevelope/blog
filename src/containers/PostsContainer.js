import { connect } from 'react-redux';

import BlogList from 'components/widgets/blog/List';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(BlogList);
