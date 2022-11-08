import { useEffect } from "react"
import { useState } from "react"


function LoginPage() {
    const [logOrReg, setLogOrReg] = useState(true)
    const [buttonText, setButtonText] = useState('Log In')
    const [titleText, setTitleText] = useState('Login')
    const [bottomButtonText, setBottomButtonText] = useState('I don\'t have an account')

    useEffect(() => {
        if(logOrReg) {
            setButtonText('Log In')
            setTitleText('Login')
            setBottomButtonText('I don\'t have an account')
        } else {
            setButtonText('Create New Account')
            setTitleText('Register')
            setBottomButtonText('I already have an account')
        }
    }, [logOrReg])
    
    const onClickBottomButton = () => {
        setLogOrReg(!logOrReg)
    }

    return(
        <div className="login">
            <h1>{titleText}</h1>
            <input type="text" placeholder="Username"/>
            <input className="password" type="text" placeholder="Password"/>
            <a href="/homepage" className="button">{buttonText}</a>
            <button className="bottombutton" onClick={onClickBottomButton}>{bottomButtonText}</button>
        </div>
    )
}

export default LoginPage