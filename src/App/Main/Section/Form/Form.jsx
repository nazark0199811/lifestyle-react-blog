import React from 'react'

const Form = () => {
    return (
        <>
            <form action="contacts.php" method="GET">
                <h2 > Ask question here</h2>

                <fieldset>
                    <label className="info-content__label">Name
                    <input className="info-content__input" type="text" name="name" placeholder="Name" /></label>
                    <label className="info-content__label">Phone
                    <input className="info-content__input" type="tel" name="phone" placeholder="Phone number" /></label>
                    <label className="info-content__label">Email
                    <input className="info-content__input" type="email" name="email" placeholder="Email" /></label>
                </fieldset>

                <fieldset>
                    <legend>Ask a question</legend>
                    <label className="info-content__label" for="multitext"></label>
                    <textarea name="txt" id="multitext" placeholder="Ask a question..."></textarea>
                </fieldset>

                <input className="info-content__button" type="submit" name="send" value="Send questions" />
            </form>
        </>
    )
}

export default Form