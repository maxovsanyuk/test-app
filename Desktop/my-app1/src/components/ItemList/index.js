import React from 'react';
import { connect } from 'react-redux'

import {getUsers} from '../../redux/users/actions'
import './style.css';
import Item from '../Item';

class ItemList extends React.Component{
    componentDidMount() {
        this.props.onGetUsers();
    }

    render() {
        const {items, loading} = this.props;
        if (loading) {
            return <div className="loading" />
        }
        return(
            <div className="items-container">
                {items.map(item => <Item key={item.cell} item={item} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.users.items,
    loading: state.users.loading,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    onGetUsers: (opts) => dispatch(getUsers(opts)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);