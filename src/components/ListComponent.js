import React, { Component } from 'react'
import update from 'immutability-helper';

class ListComponent extends Component {
    constructor(props) {
        super(props)
        let { valueArr } = props
        this.state = {
            valueArr
        }
    }

    handleInputChanges(e, index) {
        if (index === (this.state.valueArr.length - 1)) {
            //Updates value in state using immutability-helper
            this.setState({
                valueArr: update(this.state.valueArr, { $splice: [[index, 1, e.target.value]], $push: [''] })
            })
        } else {
            if (e.target.value === '') {
                this.setState({
                    valueArr: update(this.state.valueArr, { $splice: [[index, 1]] })
                })
            } else {
                this.setState({
                    valueArr: update(this.state.valueArr, { $splice: [[index, 1, e.target.value]] })
                })
            }
        }
    }

    handleBlurChanges(e, index) {
        if (!e.target.value && index === (this.state.valueArr.length - 1)) {
            this.setState({
                valueArr: update(this.state.valueArr, { $splice: [[index, 1]] })
            })
        }
    }

    render() {

        const styles = {
            border: 'none'
        }

        return (
            <div>
                <ol>
                    {this.state.valueArr.map((item, index) => {
                        return (
                            <p key={index}>
                                <span>{index + 1}.</span>
                                <input style={styles}
                                       value={item}
                                       onChange={e => this.handleInputChanges(e, index)}
                                       onBlur={e => this.handleBlurChanges(e, index)} />
                            </p>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

export default ListComponent