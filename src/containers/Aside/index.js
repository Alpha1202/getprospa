import React from 'react';

import './Aside.css';
import SubMenu from './SubMenu';
import logo from '../../img/prospa_Logo.svg';
import account from '../../img/accounts_logo.svg'
import accountManagement from '../../img/accountManagement_logo.svg';
import securitylogo from '../../img/securitylogo.svg';
import invoice from '../../img/navlink_envelope.svg';
import myprofilelogo from '../../img/myprofilelogo.svg';
import supportlogo from '../../img/supportlogo.svg';

const menuLinks = [
    {
        parent: 'Accounts',
        page: '/accounts',
        icon: account,
        dropdowns: [
            {
                page: '',
                name: 'Invoicing'
            }
        ]
    },
    
    {
        parent: 'Account Management',
        page: '/accounts-management',
        icon: accountManagement,
        dropdowns: [
            {
                page: '',
                name: 'Current'
            }
        ]
    },
    {
        parent: 'My Profile',
        page: '/profile',
        icon: myprofilelogo,
        dropdowns: []
    },
    {
        parent: 'Security',
        page: '/security',
        icon: securitylogo,
        dropdowns: []
    },
    {
        parent: 'Support',
        page: '/support',
        icon: supportlogo,
        dropdowns: []
    },
]

const Aside = (props) => {


    const { bodyWidth } = props;
    return (
        <>
            <div style={{border: '0.2px solid #888', position: 'fixed', width: '18%', top: '4rem', zIndex: '101'}}></div>
            <div className={bodyWidth === 'full' ? 'aside-wrapper' : 'aside-wrapper show'}>
                <div className='logo-div' style={{ width: '100%', height: '4rem', display: 'flex', justifyContent: 'center' }}>
                    <img src={logo} style={{ flexShrink: '1', margin: '0 1rem' }} className='logo' />
                    <button
                        className='cancel-button'
                        style={{ backgroundColor: 'none', color: 'white', outline: 'none', position: 'absolute', left: '92%', border: 'none' }}
                        onClick={() => props.setWidth()}
                    >
                        x
                </button>
                </div>

                <SubMenu menuLinks={menuLinks} />
            </div>
            {bodyWidth === 'full' && <div onClick={() => props.setWidth()} className='sm-background' />}
        </>
    )
}

export default Aside;
