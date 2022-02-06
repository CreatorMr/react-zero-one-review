/**
 *
 * @param {*} Comp
 */

import React from 'react'

export default function (Comp) {
    return class withLogger extends React.Component {
        componentWillMount() {
            console.time('time')
        }

        componentDidMount() {
            console.timeEnd('time')
        }

        render() {
            return <Comp {...this.props} />
        }
    }
}
