import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valueArr: props.valueArr
        }
        this.copiedArr = this.state.valueArr.slice()
    }

    lastItemHandle(newVal) {
        this.copiedArr[this.copiedArr.length-1] = newVal
        this.copiedArr.push('')
        this.setState({
            valueArr: this.copiedArr
        })
    }

    deleteItem(index) {
        this.copiedArr.splice(index, 1)
        this.setState({
            valueArr: this.copiedArr
        })
    }
    editItem(newVal, index) {
        this.copiedArr[index] = newVal
        this.setState({
            valueArr: this.copiedArr
        })
    }

    render() {
        const {valueArr} = this.state
        return (
            <div>
                <ol>
                    {this.state.valueArr.map((item, index) => 
                        <ListItem key={index} 
                                  valueArr={valueArr} 
                                  index={index}
                                  lastItemHandle={(e) => this.lastItemHandle(e)}
                                  deleteItem={() => this.deleteItem(index)}
                                  editItem={(e) => this.editItem(e, index)}/>
                    )}
                </ol>
            </div>
        )
    }
}

export default List



/*return (
                            <p key={index}>
                                <span>{index + 1}.</span>
                                <input style={styles}
                                       value={item}
                                       onChange={e => this.handleInputChanges(e, index)}
                                       onBlur={e => this.handleBlurChanges(e, index)} />
                            </p>
                        )*/