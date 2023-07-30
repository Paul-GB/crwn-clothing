import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { 
    auth, 
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import SignUpForm
 from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await getRedirectResult(auth);
            if(response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        /* try {
            fetchData(); 
        } catch(error) {
            console.log(error.message);
        }; */
        
    }, []);

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
            <SignUpForm />
        </div>
    )
}

export default SignIn;