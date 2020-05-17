import React from 'react';
import { Link } from 'react-router-dom';
import plus from '../../img/plus.PNG'


const AccountsCard = ({ page, icon, bgcolor, title }) => {
    return (
        <Link to={page} className='account-cards'>
            <div
                style={{
                    padding: '1.5rem 2rem',
                    width: '80%'
                }}
            >
                <h1
                    style={{
                        margin: '0',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        width: '100%',
                        textAlign: 'left',
                        color: '#270450'
                    }}
                >{title}</h1>
                <div
                    style={{
                        marginBottom: '2rem',
                        marginTop: '.7rem',
                        fontSize: '1rem',
                        fontWeight: '300',
                        width: '100%',
                        textAlign: 'left',
                        color: '#aaa'
                    }}
                >00-00-00 57797757678</div>
                <h2 style={{ color: '#270450'}}>&#8358;2,650,234.96</h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center',marginRight: '2.5rem', marginTop: '2rem', alignItems: 'center', width: '4.5rem', height: '1.3rem', padding: '1rem 0', backgroundColor: bgcolor, borderRadius: '50%' }}>
                <img src={icon} width='25' height='25'  />
            </div>
        </Link>
    )
}

export const AddAccountsCard = () => {
    return (
        <div className='account-cards image' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(225, 225, 225, 0.1)', color: '#bbb' }}>
            <img src={plus} width='50' height='50' />
            <p>Add a new account</p>
        </div>
    )
}

export default AccountsCard;
