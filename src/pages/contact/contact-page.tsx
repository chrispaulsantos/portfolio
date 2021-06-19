import React, { useState } from 'react';
import { post } from '../../services/request';
import Page from '../page';

const ContactPage = () => {
    const [state, setState] = useState({
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        email: '',
        emailError: '',
        character: '',
        characterError: '',
    });

    const onSubmit = () => {
        console.log(state)
        let hasError = false;
        const copyState = {...state};
        if (!copyState.firstName) {
            hasError = true;
            copyState.firstNameError = 'First name is required';
        }

        if (!copyState.lastName) {
            hasError = true;
            copyState.lastNameError = 'Last name is required';
        }

        if (!copyState.email) {
            hasError = true;
            copyState.emailError = 'First name is required';
        }

        if (!copyState.character) {
            hasError = true;
            copyState.characterError = 'Language is required';
        }

        if (hasError) {
            setState(copyState);

            return;
        }

        post('https://cs601.jaig.dev', {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            character: state.character
        }).then()
    }

    return (
        <Page>
            <section>
                <div className="card">
                    <div className="card-header">
                        <h1>Contact</h1>
                        <small className="aurebesh">Contact</small>
                    </div>
                    <div>
                        <form>
                            <div className={'form-control' + (state.firstNameError ? ' error' : '')}>
                                <label htmlFor="firstNameInput">First Name</label>
                                <input id="firstNameInput" 
                                    name="firstName"
                                    type="text"
                                    placeholder="Chris"
                                    value={state.firstName}
                                    onChange={(e) => setState({...state, firstName: e.target.value, firstNameError: ''})} />
                                <div className="error-message">{state.firstNameError}</div>
                            </div>
                            <div className={'form-control' + (state.lastNameError ? ' error' : '')}>
                                <label htmlFor="lastNameInput">Last Name</label>
                                <input id="lastNameInput"
                                    name="lastName"
                                    type="text"
                                    placeholder="Santos"
                                    value={state.lastName}
                                    onChange={(e) => setState({...state, lastName: e.target.value, lastNameError: ''})} />
                                <div className="error-message">{state.lastNameError}</div>
                            </div>
                            <div className={'form-control' + (state.emailError ? ' error' : '')}>
                                <label htmlFor="emailInput">Email</label>
                                <input id="emailInput"
                                    name="email"
                                    type="email"
                                    placeholder="chris@jaig.dev"
                                    value={state.email}
                                    onChange={(e) => setState({...state, email: e.target.value, emailError: ''})} />
                                <div className="error-message">{state.emailError}</div>
                            </div>
                            <div className={'form-control' + (state.characterError ? ' error' : '')}>
                                <label>Favorite Star Wars Character</label>
                                <div className="radio-group">
                                    <div className="radio-group-item" onClick={(e) => setState({...state, character: 'Ahsoka Tano', characterError: ''})}>
                                        <input id="favoriteSWCharacterInput1"
                                            name="favoriteSWCharacter"
                                            type="radio"
                                            value="Ahsoka Tano"
                                            checked={state.character === 'Ahsoka Tano'}
                                            onChange={() => null} />
                                        <div className="bubble"></div>
                                        <label htmlFor="favoriteSWCharacterInput1" className="text">Ahsoka Tano</label>
                                    </div>
                                    <div className="radio-group-item" onClick={(e) => setState({...state, character: 'Grand Admiral Thrawn', characterError: ''})}>
                                        <input id="favoriteSWCharacterInput2"
                                            name="favoriteSWCharacter"
                                            type="radio"
                                            value="Grand Admiral Thrawn" 
                                            checked={state.character === 'Grand Admiral Thrawn'} 
                                            onChange={() => null} />
                                        <div className="bubble"></div>
                                        <label htmlFor="favoriteSWCharacterInput2" className="text">Grand Admiral Thrawn</label>
                                    </div>
                                    <div className="radio-group-item" onClick={(e) => setState({...state, character: 'Darth Vader', characterError: ''})}>
                                        <input id="favoriteSWCharacterInput3"
                                            name="favoriteSWCharacter"
                                            type="radio"
                                            value="Darth Vader" 
                                            checked={state.character === 'Darth Vader'}
                                            onChange={() => null} />
                                        <div className="bubble"></div>
                                        <label htmlFor="favoriteSWCharacterInput3" className="text">Darth Vader</label>
                                    </div>
                                    <div className="radio-group-item" onClick={(e) => setState({...state, character: 'Luke Skywalker', characterError: ''})}>
                                        <input id="favoriteSWCharacterInput4"
                                            name="favoriteSWCharacter"
                                            type="radio"
                                            value="Luke Skywalker" 
                                            checked={state.character === 'Luke Skywalker'}
                                            onChange={() => null} />
                                        <div className="bubble"></div>
                                        <label htmlFor="favoriteSWCharacterInput4" className="text">Luke Skywalker</label>
                                    </div>
                                </div>
                                <div className="error-message">{state.characterError}</div>
                            </div>
                            <button type="button" className="btn" onClick={onSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export default ContactPage;