import { useNavigate } from "react-router-dom";

import  Sidebar from "../../components/Sidebar";
import "./CreateProfile.css";
const CreateProfile = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Sidebar />

            <div className="create-profile">
                <h2>Submit a professor/tutor profile here: </h2>
                <form method="post">
                    <label for="name">Professor/Tutor name:</label>
                    <input type="text" name="name"></input>
                    <label for="course-code">Course code:</label>
                    <input type="text" name="course-code"></input>
                    <label for="professor-or-tutor">Professor or Tutor</label>
                    <select name="professor-or-tutor">
                        <option value="Professor">Professor</option>
                        <option value="Tutor">Tutor</option>
                    </select>
                    <div className="image-upload">
                        <label className="invisible-placeholder"></label>
                        <label for="image">Upload image:</label>
                        <input type="file" accept="image/png, image/jpeg" name="image"></input>
                    </div>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )

}

export default CreateProfile;