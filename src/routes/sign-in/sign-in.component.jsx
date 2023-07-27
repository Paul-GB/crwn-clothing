import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        //const response = await signInWithGooglePopup();
        //console.log(response);
        const { user } = await signInWithGooglePopup();
        //createUserDocumentFromAuth(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h2>Sign In</h2>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
        </div>
            )
}

export default SignIn;