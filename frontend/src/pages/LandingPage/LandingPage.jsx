import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>HATE MY PROFESSOR</h1>
            <h2>Do you hate your Professor? Rate them now and let everyone know your concerns!</h2>
            <button onClick={() => navigate("login")}>Login</button>
            
        </>
    )

}

export default LandingPage;