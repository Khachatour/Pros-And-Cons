import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valueArr: props.valueArr
        }
    }

    // lastItemHandle(newVal) {
    //     // const copiedArr[this.copiedArr.length - 1] = newVal
    //     // this.copiedArr.push('')
    //     this.setState({
    //         valueArr: [...this.state.valueArr.slice(),]
    //     })
    // }

    deleteItem(index) {
        this.setState({
            valueArr: [...this.state.valueArr.slice(0, index),
            ...this.state.valueArr.slice(index + 1)]
        })
    }

    editItem(newVal, index) {
        (newVal && this.setState({
            valueArr: [...this.state.valueArr.slice(0, index),
                newVal,
            ...this.state.valueArr.slice(index + 1)]
        }))
        newVal || this.deleteItem(index)

        if (index === (this.state.valueArr.length - 1)) {
            this.setState({
                valueArr: [...this.state.valueArr.slice(0, index),
                    newVal,
                ...this.state.valueArr.slice(index + 1), '']
            })
        }
    }

    render() {
        return (
            <div>
                <ol>
                    {this.state.valueArr.map((item, index) =>
                        <ListItem key={index}
                            value={item}
                            index={index}
                            editItem={(e) => this.editItem(e, index)} />
                    )}
                </ol>
            </div>
        )
    }
}

export default List
