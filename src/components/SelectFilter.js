import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import { filterArticle } from '../AC/filters'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    render() {
        const { articles } = this.props
        const { selected } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }

    handleChange = selected => {
      this.setState({ selected })
      filterArticle(selected)
    }
}

export default connect(state => ({
  articles: state.articles
}), {
   filterArticle
 })(SelectFilter)
