import React, { useState } from 'react';
import currentPng from '../../img/current.PNG';
import hall from '../../img/hall.svg';
import icon from '../../img/down-arrow.PNG';
import userIcon from '../../img/user.PNG';

const Transactions = () => {
    const [showTransaction, setShowTransaction] = useState(false);
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '3rem 5%' }}>
                <div className={!showTransaction ? 'ninety' : 'seventy'}>
                    
                    <div className='title' style={{ width: '100%', fontSize: '.8rem', color: '#ccc'  }}>
                        <div>
                            Current
                        </div>
                        <div>
                            Sort Code
                        </div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <p className='transaction-amount' style={{ fontWeight: 'bolder', fontSize: '1rem', flexGrow: '1', color: '#333' }}>
                                <strong>&#8358;2,650,234.96</strong>
                            </p>
                            <button className='btn-2'>
                                Make a payment
                            </button>
                        </div>
                    </div>

                    <div
                        style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', margin: '3rem auto', width: '95%' }}
                    >
                        <div className='date-time'>
                            <div style={{ flexGrow: 1, fontSize: '.7rem' }}>
                                Friday 15 July 2019
                            </div>
                        <div>
                            <button className='btn-1'>
                                Export data
                            </button>
                            <button className='btn-1'>
                                Filter Data
                            </button>
                        </div>
                        </div>
                        <ul className='transaction-list'>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                            >
                                <img src={currentPng} width='40' height='40' />
                                <span className='transaction-user'>
                                    <div className='transaction-name'>
                                        Terry Williams
                                </div>
                                    <div className='transaction-cap'>
                                        Sales
                                </div>
                                </span>
                                <span className='transaction-time'>
                                    8:30pm
                            </span>
                                <span className='transaction-amount' style={{ color: 'green' }}>
                                    &#8358;2,650,234.96
                            </span>
                            </li>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                            >
                                <img src={currentPng} width='40' height='40' />
                                <span className='transaction-user'>
                                    <div className='transaction-name'>
                                        Terry Williams
                                </div>
                                    <div className='transaction-cap'>
                                        Sales
                                </div>
                                </span>
                                <span className='transaction-time'>
                                    8:30pm
                            </span>
                                <span className='transaction-amount'>
                                    &#8358;2,650,234.96
                                </span>
                            </li>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                            >
                                <img src={currentPng} width='40' height='40' />
                                <span className='transaction-user'>
                                    <div className='transaction-name'>
                                        Terry Williams
                                </div>
                                    <div className='transaction-cap'>
                                        Sales
                                </div>
                                </span>
                                <span className='transaction-time'>
                                    8:30pm
                            </span>
                                <span className='transaction-amount'>
                                    &#8358;2,650,234.96
                            </span>
                            </li>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                            >
                                <img src={currentPng} width='40' height='40' />
                                <span className='transaction-user'>
                                    <div className='transaction-name'>
                                        Terry Williams
                                </div>
                                    <div className='transaction-cap'>
                                        Sales
                                </div>
                                </span>
                                <span className='transaction-time'>
                                    8:30pm
                            </span>
                                <span className='transaction-amount'>
                                    &#8358;2,650,234.96
                                </span>
                            </li>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                            >
                                <img src={currentPng} width='40' height='40' />
                                <span className='transaction-user'>
                                    <div className='transaction-name'>
                                        Terry Williams
                                </div>
                                    <div className='transaction-cap'>
                                        Sales
                                </div>
                                </span>
                                <span className='transaction-time'>
                                    8:30pm
                            </span>
                                <span className='transaction-amount' style={{ color: 'green' }}>
                                    &#8358;2,650,234.96
                            </span>
                            </li>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                            >
                                <img src={currentPng} width='40' height='40' />
                                <span className='transaction-user'>
                                    <div className='transaction-name'>
                                        Terry Williams
                                </div>
                                    <div className='transaction-cap'>
                                        Sales
                                </div>
                                </span>
                                <span className='transaction-time'>
                                    8:30pm
                            </span>
                                <span className='transaction-amount' style={{ color: 'green' }}>
                                    &#8358;2,650,234.96
                                </span>
                            </li>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                            >
                                <img src={currentPng} width='40' height='40' />
                                <span className='transaction-user'>
                                    <div className='transaction-name'>
                                        Terry Williams
                                </div>
                                    <div className='transaction-cap'>
                                        Sales
                                </div>
                                </span>
                                <span className='transaction-time'>
                                    8:30pm
                            </span>
                                <span className='transaction-amount'>
                                    &#8358;2,650,234.96
                            </span>
                            </li>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                            >
                                <img src={currentPng} width='40' height='40' />
                                <span className='transaction-user'>
                                    <div className='transaction-name'>
                                        Terry Williams
                                </div>
                                    <div className='transaction-cap'>
                                        Sales
                                </div>
                                </span>
                                <span className='transaction-time'>
                                    8:30pm
                            </span>
                                <span className='transaction-amount' style={{ color: 'green' }}>
                                    &#8358;2,650,234.96
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={ !showTransaction ? 'transaction-details': 'transaction-details show-transact'}>
                    <div className='transaction-details-header'>
                        Transfer

                        <button
                            style={{ backgroundColor: 'none', outline: 'none', position: 'absolute', left: '92%', border: 'none' }}
                            onClick={() => setShowTransaction(false)}
                        >
                            x
                        </button>
                    </div>
                    <img src={hall} width='30' width='30' style={{ position: 'absolute', zIndex: '4', top: '12%' }} />
                    <div className='dash'>
                        <div style={{ paddingTop: '5rem', display: 'flex', flexDirection: 'column' }}>
                            <h3
                                style={{
                                    margin: '0',
                                    fontSize: '1rem',
                                    width: '100%',
                                    textAlign: 'center',
                                    marginBottom: '.7rem',
                                }}
                            >Current account</h3>
                            <div
                                style={{
                                    marginBottom: '.7rem',
                                    fontSize: '.7rem',
                                    fontWeight: '300',
                                    width: '100%',
                                    textAlign: 'center',
                                }}
                            >57797757678</div>
                            <button
                                style={{ display: 'flex', alignItems: 'center', fontSize: '.8rem', color: '#270450', border: '1px solid #ccc', backgroundColor: '#BB53F2', outline: 'none', padding: '.3rem 1rem', borderRadius: '.3rem', margin: '0 auto', marginBottom: '2rem' }}
                            >
                                Office Rent
                                <img src={icon} style={{ flexShrink: '1', margin: '0 .5rem' }} width='10' height='20' />
                            </button>
                            <div style={{ borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc', padding: '1rem 0', display: 'flex' }}>
                                <img src={userIcon} width='50' height='50' style={{ flexShrink: '1', margin: '0 .5rem' }} />
                                <span className='transaction-user'>
                                    <div className='transaction-name'>
                                        Terry Williams
                                    </div>
                                    <div className='transaction-cap'>
                                        Sales
                                    </div>
                                </span>
                            </div>
                            <div style={{ borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc', padding: '1rem 1rem', display: 'flex', flexDirection: 'column', fontSize: '.7rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    IBAN: <strong>54677837463687363768378978638</strong>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    IBAN: <strong>54677837463687363768378978638</strong>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    IBAN: <strong>54677837463687363768378978638</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ fontSize: '.7rem', padding: '1rem 0', width: '80%', backgroundColor: 'none' }}>
                        Add a note
                        <input type='text'
                            style={{
                                outline: 'none',
                                height: '1.5rem',
                                width: '100%',
                                border: 'none',
                                borderBottom: '1px solid #ccc',
                                fontSize: '.6rem',
                                backgroundColor: 'transparent'
                            }}
                            placeholder='Type here to put a note'
                        />
                    </div>

                    <div
                        style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', margin: '1rem auto', width: '80%' }}
                    >
                        <div className='date-time' style={{ width: '100%', paddingBottom: '.5rem' }}>
                            <div style={{ flexGrow: 1, fontSize: '.8rem' }}>
                                You and a rental company
                            </div>
                        </div>
                        <ul className='transaction-list' style={{ width: '100%', padding: '1rem 0' }}>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                                style={{ minHeight: '2rem' }}
                            >
                                <img src={currentPng} width='20' height='20' />
                                <span className='transaction-user'>
                                    <div className='transaction-name' style={{ fontSize: '.6rem' }}>
                                        Terry Williams
                                            </div>
                                </span>
                                <span className='transaction-amount' style={{ fontSize: '.6rem' }}>
                                    &#8358;2,650,234.96
                                        </span>
                            </li>
                            <li
                                onClick={() => setShowTransaction(prevState => !prevState)}
                                style={{ minHeight: '2rem' }}
                            >
                                <img src={currentPng} width='20' height='20' />
                                <span className='transaction-user'>
                                    <div className='transaction-name' style={{ fontSize: '.6rem' }}>
                                        Terry Williams
                                            </div>
                                </span>
                                <span className='transaction-amount' style={{ fontSize: '.6rem' }}>
                                    &#8358;2,650,234.96
                                        </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transactions;
