import React from 'react';

import './Body.css';
import Header from '../Header';

const Body = (props) => {

    const { bodyWidth, children } = props;
    
    return (
        <div
            className='body-wrapper'
            style={
                bodyWidth === 'full' ? { width: '100%', left: '0' } : { transition: 'ease-out 1s'}
            }
        >
            <Header setWidth={props.setWidth} />

            <div className='body-container' style={{ height: '100%' }}>
                { children }
            </div>
        </div>
    )
}

export default Body;
