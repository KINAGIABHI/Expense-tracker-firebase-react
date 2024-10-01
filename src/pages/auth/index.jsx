import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import "./styles.css";
import { useEffect } from "react";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    console.log(results);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    //we cannot store the authInfo directly in to the local storage because it is a object so we need to to convert it to into a string and then store it in the local storage for that reason i use json.stringify() method
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };
  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }
  useEffect({}, []);

  return (
    <div className="login-page">
      <p>Sign In With Google</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
};
