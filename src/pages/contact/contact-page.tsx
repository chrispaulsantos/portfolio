import React, { useState } from 'react';

const ContactPage = () => {
    const [state, setState] = useState({
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        email: '',
        emailError: '',
        language: '',
        languageError: '',
        characters: new Set<string>(),
        charactersError: ''
    })
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

        if (!copyState.language) {
            hasError = true;
            copyState.languageError = 'Language is required';
        }

        if (copyState.characters.size === 0) {
            hasError = true;
            copyState.charactersError = 'At least one character is required';
        }

        if (hasError) {
            setState(copyState);

            return;
        }
    }

    const onCheckClick = (val: string) => {
        return () => {
            const characters = new Set<string>(state.characters);
            console.log(characters)
            if (characters.has(val)) {
                characters.delete(val);
            } else {
                characters.add(val);
            }
            console.log(characters)

            setState({...state, characters, charactersError: ''})
        }
    }

    return (
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
                                type="text"
                                placeholder="chris@jaig.dev"
                                value={state.email}
                                onChange={(e) => setState({...state, email: e.target.value, emailError: ''})} />
                            <div className="error-message">{state.emailError}</div>
                        </div>
                        <div className={'form-control' + (state.languageError ? ' error' : '')}>
                            <label>Favorite Language</label>
                            <div className="radio-group">
                                <div className="radio-group-item" onClick={(e) => setState({...state, language: 'java', languageError: ''})}>
                                    <input id="favoriteLanguageInput1"
                                        name="favoriteLanguage"
                                        type="radio"
                                        value="java"
                                        checked={state.language === 'java'}
                                        onChange={() => null} />
                                    <div className="bubble"></div>
                                    <label htmlFor="favoriteLanguageInput1" className="text">Java</label>
                                </div>
                                <div className="radio-group-item" onClick={(e) => setState({...state, language: 'javascript', languageError: ''})}>
                                    <input id="favoriteLanguageInput2"
                                        name="favoriteLanguage"
                                        type="radio"
                                        value="javascript" 
                                        checked={state.language === 'javascript'} 
                                        onChange={() => null} />
                                    <div className="bubble"></div>
                                    <label htmlFor="favoriteLanguageInput2" className="text">Javascript</label>
                                </div>
                                <div className="radio-group-item" onClick={(e) => setState({...state, language: 'python', languageError: ''})}>
                                    <input id="favoriteLanguageInput3"
                                        name="favoriteLanguage"
                                        type="radio"
                                        value="python" 
                                        checked={state.language === 'python'}
                                        onChange={() => null} />
                                    <div className="bubble"></div>
                                    <label htmlFor="favoriteLanguageInput3" className="text">Python</label>
                                </div>
                            </div>
                            <div className="error-message">{state.languageError}</div>
                        </div>
                        <div className={'form-control' + (state.charactersError ? ' error' : '')}>
                            <label>Favorite Star Wars Characters</label>
                            <div className="checkbox-group">
                                <div className="checkbox-group-item" onClick={onCheckClick('Ahsoka Tano')}>
                                    <input id="check01"
                                        name="favSWCharacter"
                                        type="checkbox"
                                        value="Ahsoka Tano" />
                                    <label htmlFor="check01">Ahsoka Tano</label>
                                </div>
                                <div className="checkbox-group-item" onClick={onCheckClick('Grand Admiral Thrawn')}>
                                    <input id="check02"
                                        name="favSWCharacter"
                                        type="checkbox"
                                        value="Grand Admiral Thrawn" />
                                    <label htmlFor="check02">Grand Admiral Thrawn</label>
                                </div>
                                <div className="checkbox-group-item" onClick={onCheckClick('Darth Vader')}>
                                    <input id="check03"
                                        name="favSWCharacter"
                                        type="checkbox"
                                        value="Darth Vader" />
                                    <label htmlFor="check03">Darth Vader</label>
                                </div>
                                <div className="checkbox-group-item" onClick={onCheckClick('Qui-Gon Jinn')}>
                                    <input id="check04"
                                        name="favSWCharacter"
                                        type="checkbox"
                                        value="Qui-Gon Jinn" />
                                    <label htmlFor="check04">Qui-Gon Jinn</label>
                                </div>
                            </div>
                            <div className="error-message">{state.charactersError}</div>
                        </div>
                        <button type="button" className="btn" onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactPage;