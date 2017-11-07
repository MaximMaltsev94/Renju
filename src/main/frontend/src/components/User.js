import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

export default class User extends Component {
    onAgeBtnClick(e) {
        this.props.setAge(+e.target.innerText)
    }
    render() {
        const {name, age} = this.props;
        return <div>
            <p>Привет, {name}! Твой возраст {age}? Если нет, то выбери свой возраст:</p>
            <button className='ui button' onClick={::this.onAgeBtnClick}>20</button>
            <button className='ui button' onClick={::this.onAgeBtnClick}>21</button>
            <button className='ui button' onClick={::this.onAgeBtnClick}>22</button>
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    setAge: PropTypes.func.isRequired
};