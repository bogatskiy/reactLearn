//decorator === HOC Higher order component
import React from 'react'

export default function accordion(Component) {
    return class WrappedComponent extends React.Component {
      state = {
          openArticleId: false
      }

        render() {
            return <Component {...this.props} {...this.state} accordion = {this.accordion}/>
        }

        accordion = id => ev => {
            this.setState({
                openArticleId: (id === this.state.openArticleId ? false : id)
            })
        }

    }
}
