import React, {useState, useEffect} from 'react';
import { getProfile } from "../api";

const Profile = () => {
    
    let token = "";
    
    const [myInfo, setMyInfo] = useState({})
    
    useEffect(() => {
        token = localStorage.getItem("token")
        async function getMyInfo () {
            const myReturnedInfo = await getProfile(token)
            setMyInfo(myReturnedInfo)
        }
        getMyInfo();
    },
    [])


    return (
        <div className="box">{`This is your Profile Component`}
 
        </div>
        )
};  

export default Profile;