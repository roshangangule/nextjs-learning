import { Fragment, useRef } from "react";

export default function FeedbackPage() {
    const emailInputRef = useRef();
    const feedbackInputRef = useRef();

    function feedbackformHandler(event) {
        event.preventDefault();
        console.log(emailInputRef.current.value);
        console.log(feedbackInputRef.current.value)
    };

    return (
        <Fragment>
            <h4>FeedBack Form</h4>
            <form onSubmit={feedbackformHandler}>
                <div>
                    <label>Email: </label>
                    <input type="email" id="email" ref={emailInputRef}/>
                </div>
                <div>
                    <label>Feedback: </label>
                    <textarea type="text" id="feedback" ref={feedbackInputRef}/>
                </div>
                <button>Submit</button>
            </form>
        </Fragment>
    );
}