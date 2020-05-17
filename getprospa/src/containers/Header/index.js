import React from 'react';

import userIcon from '../../img/user.PNG';
import downArrow from '../../img/down-arrow.PNG';
import mail from '../../img/navlink_envelope.svg';

const Header = (props) => {
    return (
        <div className="header">
            <button
                className='aside-button'
                onClick={() => props.setWidth()}
            >
                <div style={{ width: '2rem', border: '1px solid black' }} />
                <div style={{ width: '2rem', border: '1px solid black' }} />
                <div style={{ width: '2rem', border: '1px solid black' }} />
            </button>
            <div className='header-inner-wrapper' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    style={{ background: 'transparent',padding: '0rem 1rem', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc', borderBottom: 'none', borderTop: 'none', outline: 'none', height: 'inherit' }}
                >
                    <img src={mail} width='20' height='20' />
                </button>
                <button
                    style={{ background: 'transparent', border: 'none', outline: 'none', height: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'none', minWidth: '8rem' }}
                >
                    <img src={userIcon} width='30' height='30' style={{ flexShrink: '1', margin: '0 .5rem' }} />
                    <span style={{ flexGrow: '1' }}>Victor Shiwani</span>
                    <img src={downArrow} style={{ flexShrink: '1', margin: '0 1rem' }} width='30' height='20' />
                </button>
            </div>
        </div>
    )
}

export default Header;