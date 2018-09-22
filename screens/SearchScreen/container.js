import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchScreen from './presenter';
import SearchBar from '../../components/SearchBar';

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerTitle: <SearchBar submit={text => params.submitSearch(text)} />
    };
  };

  state = {
    searchingBy: '',
    isFetching: false
  };

  static propTypes = {
    getEmptySearch: PropTypes.func.isRequired,
    searchHashtag: PropTypes.func.isRequired,
    search: PropTypes.array
  };

  static defaultProps = {
    search: []
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      submitSearch: this._submitSearch
    });
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.search) {
      this.setState({
        isFetching: false
      });
    }
  };

  render() {
    return (
      <SearchScreen {...this.props} {...this.state} refresh={this._refresh} />
    );
  }

  _submitSearch = text => {
    const { getEmptySearch, searchHashtag } = this.props;
    this.setState({
      searchingBy: text,
      isFetching: true
    });
    if (text === '') {
      getEmptySearch();
    } else {
      searchHashtag(text);
    }
  };

  _refresh = () => {
    const { searchingBy } = this.state;
    const { getEmptySearch, searchHashtag } = this.props;
    if (searchingBy === '') {
      getEmptySearch();
    } else {
      searchHashtag(searchingBy);
    }
  };
}

export default Container;
