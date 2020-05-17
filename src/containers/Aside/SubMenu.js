import React from 'react';
import downArrow from '../../img/blue-arrow.PNG';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SubMenu = ({ menuLinks }) => {

    return (
        <div className='menu-container' style={{color: '#707070'}}>
            {
                menuLinks.map((menu, index) => {
                    return (
                        <div
                            style= {{
                                width: '100%',
                                height: 'max-content'
                            }}
                            key={menu.parent + index}
                        >
                            <>

                                {
                                    menu.parent && menu.dropdowns.length > 0 ? (
                                        <Link to={menu.page} className='parent-nav'
                                            onClick = {(e) => {
                                                const activeClass = document.getElementById('active');
                                                if (activeClass != null) activeClass.id = '';
                                                e.target.id ='active';
                                                const dropdowns = document.getElementById(menu.parent);
                                                if (dropdowns.style.display  === 'none') {
                                                    dropdowns.style.display = 'block'
                                                }  else {
                                                    dropdowns.style.display = 'none'
                                                }
                                            }}
                                        >
                                            <img src={menu.icon} style={{ flexShrink: '1', margin: '0 1rem' }} width='15' height='15' />
                                            { menu.parent }
                                            <FontAwesomeIcon style={{marginLeft: 'auto', marginRight: '1.5rem'}} icon={faChevronDown} />
                                            
                                            
                                        </Link>
                                    ) : null
                                }

                                {
                                    menu.parent && menu.dropdowns.length < 1 ? (
                                        <Link to={menu.page} className='parent-nav'
                                            onClick = {(e) => {
                                                e.preventDefault();
                                                const activeClass = document.getElementById('active');
                                                if (activeClass != null) activeClass.id = '';
                                                e.target.id ='active';
                                            }}
                                        >                                            
                                            <img src={menu.icon} style={{  flexShrink: '1', margin: '0 1rem' }} width='15' height='15' />
                                            { menu.parent }
                                        </Link>
                                    ) : null
                                }

                                <div id={menu.parent} style={{ display: 'none' }}>
                                    {
                                        menu.dropdowns.length > 0 ? (
                                            menu.dropdowns.map(dropdown => {
                                                return (
                                                    <a key={dropdown.name} href={dropdown.page} className='parent-nav' style={{ width: '70%', marginLeft: 'auto', justifyContent: 'left' }}>
                                                        { dropdown.name }
                                                    </a>
                                                )
                                            })
                                        ) : null
                                    }
                                </div>
                            </>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SubMenu;
