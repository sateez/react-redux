
import React, {Component, PropTypes} from 'react';
import Icon from './Icon';
import Check from '../assets/images/check.svg';


class Test extends Component {
    render() {
        return (
        <div>
            <h1>Hi from image sprite</h1>
            <Icon glyph={Check} />
            </div>
        )    

    }

}
export default Test; 