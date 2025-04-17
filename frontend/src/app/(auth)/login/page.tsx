"use client";
import "./page.scss";
import { useState } from "react";
import eye from "@/../public/icons/eye.svg";

export default function LoginPage() {
  const SocialLogin = () => {
    return (
      <div className="social-login">
        <button className="social-button">
          <img src="google.svg" alt="Google" className="social-icon" />
          Google
        </button>
      </div>
    );
  };
  const InputField = ({ type, placeholder, icon }: any) => {
    // State to toggle password visibility
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    return (
      <div className="input-wrapper">
        <input
          type={isPasswordShown ? "text" : type}
          placeholder={placeholder}
          className="input-field"
          required
        />
        <i className="material-symbols-rounded">{icon}</i>
        {type === "password" && (
          <i
            onClick={() => setIsPasswordShown((prevState) => !prevState)}
            className="material-symbols-rounded eye-icon"
          >
            {isPasswordShown ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                  stroke="#759cff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="#759cff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_77_5)">
                  <path
                    d="M18.4015 18.2481C16.6921 19.5511 14.6107 20.273 12.4615 20.3081C5.46155 20.3081 1.46155 12.3081 1.46155 12.3081C2.70544 9.99003 4.43068 7.96474 6.52155 6.36813M10.3615 4.54813C11.0499 4.38701 11.7546 4.30647 12.4615 4.30813C19.4615 4.30813 23.4615 12.3081 23.4615 12.3081C22.8545 13.4437 22.1306 14.5129 21.3015 15.4981M14.5815 14.4281C14.3069 14.7229 13.9757 14.9593 13.6077 15.1233C13.2397 15.2872 12.8424 15.3754 12.4396 15.3825C12.0368 15.3896 11.6367 15.3155 11.2632 15.1646C10.8896 15.0137 10.5503 14.7892 10.2654 14.5043C9.98052 14.2194 9.75594 13.8801 9.60506 13.5065C9.45417 13.133 9.38007 12.7329 9.38718 12.33C9.39429 11.9272 9.48246 11.53 9.64642 11.162C9.81039 10.794 10.0468 10.4628 10.3415 10.1881"
                    stroke="#759cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.46155 1.30811L23.4615 23.3081"
                    stroke="#759cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_77_5">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.461548 0.308105)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
          </i>
        )}
      </div>    
    );
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className="separator">
        <span>or</span>
      </p>
      <form action="#" className="login-form">
      <InputField
        //   type="email"
          placeholder="User name"
          icon={
            ""
          }
        />
        <InputField
          type="email"
          placeholder="Email address"
          icon={""
            // <svg
            //   role="img"
            //   viewBox="0 0 24 24"
            //   xmlns="http://www.w3.org/2000/svg"
            //   id="Gmail--Streamline-Simple-Icons"
            //   height="24"
            //   width="24"
            // >
            //   <desc>Gmail Streamline Icon: https://streamlinehq.com</desc>
            //   <title>Gmail</title>
            //   <path
            //     d="M24 5.457v13.909c0 0.904 -0.732 1.636 -1.636 1.636h-3.819V11.73L12 16.64l-6.545 -4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0 -2.023 2.309 -3.178 3.927 -1.964L5.455 4.64 12 9.548l6.545 -4.91 1.528 -1.145C21.69 2.28 24 3.434 24 5.457z"
            //     fill="#759cff"
            //     strokeWidth="1"
            //   ></path>
            // </svg>
          }
        />
        <InputField
          type="password"
          placeholder="Password"
          icon={""
            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   x="0px"
            //   y="0px"
            //   width="70%"
            //   height="70%"
            //   viewBox="0 0 24 24"
            // >
            //   <path
            //     d="M 7 5 C 3.1545455 5 0 8.1545455 0 12 C 0 15.845455 3.1545455 19 7 19 C 9.7749912 19 12.089412 17.314701 13.271484 15 L 16 15 L 16 18 L 22 18 L 22 15 L 24 15 L 24 9 L 23 9 L 13.287109 9 C 12.172597 6.6755615 9.8391582 5 7 5 z M 7 7 C 9.2802469 7 11.092512 8.4210017 11.755859 10.328125 L 11.988281 11 L 22 11 L 22 13 L 20 13 L 20 16 L 18 16 L 18 13 L 12.017578 13 L 11.769531 13.634766 C 11.010114 15.575499 9.1641026 17 7 17 C 4.2454545 17 2 14.754545 2 12 C 2 9.2454545 4.2454545 7 7 7 z M 7 9 C 5.3549904 9 4 10.35499 4 12 C 4 13.64501 5.3549904 15 7 15 C 8.6450096 15 10 13.64501 10 12 C 10 10.35499 8.6450096 9 7 9 z M 7 11 C 7.5641294 11 8 11.435871 8 12 C 8 12.564129 7.5641294 13 7 13 C 6.4358706 13 6 12.564129 6 12 C 6 11.435871 6.4358706 11 7 11 z"
            //     fill="#759cff"
            //   ></path>
            // </svg>
          }
        />
        <a href="#" className="forgot-password-link">
          Forgot password?
        </a>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <p className="signup-prompt">
        Don&apos;t have an account?{" "}
        <a href="#" className="signup-link">
          Sign up
        </a>
      </p>
    </div>
  );
}
