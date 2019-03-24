import React from 'react';
import { connect } from 'react-redux'

import '../Pagination/style.css';
import {getUsers} from '../../redux/users/actions'

class Pagination extends React.Component{
    handleClick = (page) => () => {
        const {loading, currentPage, onGetUsers} = this.props;
        if (loading || page < 1) {
            return;
        }
        onGetUsers({page})
    }

    render() {
        const {currentPage} = this.props;
        return(
            <div className="pagination">
                <button id="prevBtn" onClick={this.handleClick(currentPage-1)}>Prev</button>
                <button id="nextBtn" onClick={this.handleClick(currentPage+1)}>Next</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPage: state.users.info.page,
    loading: state.users.loading,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    onGetUsers: (opts) => dispatch(getUsers(opts)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);