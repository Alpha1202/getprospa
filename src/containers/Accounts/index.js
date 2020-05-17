import React from 'react';
import Body from '../Body';
import AccountsCard, { AddAccountsCard } from './AccounsCard';

import currentPng from '../../img/currentaccountlogo.svg'
import SavingsPng from '../../img/savingsaccountlogo.svg'
import taxPng from '../../img/taxaccountlogo.svg'

const Accounts = () => {
    return (
        <>
            <div style={{ margin: '3rem auto', width: '90%' }}>
                <h1 className='title'>
                    All accounts
                </h1>

                <div
                    style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', margin: '3rem auto', width: '95%' }}
                >
                    <AccountsCard page='/transactions' title='Current Account' bgcolor='rgba(250,74,132, 0.2)' icon={currentPng} />
                    <AccountsCard page='/transactions' title='Savings Account' bgcolor='rgba(126,81,255,  0.2)' icon={SavingsPng} />
                    <AccountsCard page='/transactions' title='Tax Account' bgcolor='rgba(187,83,242, 0.2)' icon={taxPng} />
                    <AddAccountsCard />
                </div>
            </div>

            <h1 className='title foot'>
                All transactions
            </h1>
        </>
    )
}

export default Accounts

