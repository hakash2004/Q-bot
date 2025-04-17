"use client";
import { JSX, useEffect, useState } from "react";
import mailIcon from "../../../../public/icons/mail-icon.svg";
import phoneIcon from "../../../../public/icons/phone-icon.svg";
import linkedInIcon from "../../../../public/icons/linkedin-icon.svg";
import "./profile.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ProfileContactType = {
  icon: JSX.Element;
  value: string;
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // export default function Profile()
  const router = useRouter();
  const navbarList = [
    "personal",
    "attendance",
    "assesment",
    "records",
    "fees",
    // "achivements",
  ];
  const profileContact: ProfileContactType[] = [
    {
      icon: <Image src={mailIcon} alt="Mail" width={20} height={20} />,
      value: "name.number900@gmail.com",
    },
    {
      icon: <Image src={phoneIcon} alt="Phone" width={20} height={20} />,
      value: "+91 94761 78564",
    },
    {
      icon: <Image src={linkedInIcon} alt="LinkedIn" width={20} height={20} />,
      value: "xxxx/xxxx/xxxx",
    },
  ];
  const navlen = navbarList.length;
  const [activeNavbar, setActiveNavbar] = useState("personal");

  useEffect(() => {
    if (window.location.pathname === "/profile") {
      router.push("/profile/personal");
    }
  }, []);

  const handleNavbar = (e: string) => {
    setActiveNavbar(e);
    router.push(`/profile/${e}`);
  };
  return (
    <>
      <div className="profile-container">
        <div className="profile-wrapper">
          <div className="bioData-container">
            <div className="edit">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4615 3.30792C17.7242 3.04528 18.036 2.83693 18.3792 2.69479C18.7223 2.55265 19.0901 2.47949 19.4615 2.47949C19.833 2.47949 20.2008 2.55265 20.5439 2.69479C20.8871 2.83693 21.1989 3.04528 21.4615 3.30792C21.7242 3.57056 21.9325 3.88237 22.0747 4.22553C22.2168 4.56869 22.29 4.93648 22.29 5.30792C22.29 5.67935 22.2168 6.04715 22.0747 6.39031C21.9325 6.73347 21.7242 7.04528 21.4615 7.30792L7.96155 20.8079L2.46155 22.3079L3.96155 16.8079L17.4615 3.30792Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="photo-container">
              <div className="photo c">
                <Image
                  src="/User--Streamline-Block-Free-icon.svg"
                  alt="User profile"
                  width={90}
                  height={90}
                />    
              </div>
            </div>
            <div className="profile-college">
              <div className="title">
                SATHYABAMA INSTITUE OF SCIENCE AND TECNOLOGY
              </div>
              <div className="title-caption">(deemed to be university)</div>
              <div className="title-caption">
                accredited with A++ by NAAC | 12B stuts by UGC | Approved by
                AICTE
              </div>
            </div>
            <div className="profile-school">
              <div className="profile-school-element">
                <div className="description">Name</div>:
                <div className="value">HAKASH</div>
              </div>
              <div className="profile-school-element">
                <div className="description">Reg no</div>:
                <div className="value">42130642</div>
              </div>
              <div className="profile-school-element">
                <div className="description">Degree</div>:
                <div className="value">BE-ECE</div>
              </div>
              <div className="profile-school-element" style={{ border: 0 }}>
                <div className="description">Batch</div>:
                <div className="value">2026</div>
              </div>
            </div>
            <div className="profile-contact">
              {profileContact.map((e: ProfileContactType, index: number) => {
                return (
                  <div key={`${e.value}-${index}`} className="contact-element">
                    <div className="contact-icon c">{e.icon}</div>
                    <div className="contact-value c">{e.value}</div>
                  </div>
                );
              })}
            </div>
            {/* <div className="photo"></div>
            <div className="sectionOne bioDataSection">
              <div className="description">
                <div className="line">Name</div>
                <div className="line">DOB</div>
                <div className="line">Blood group</div>
              </div>
              <div className="values">
                <div className="line">Hakash</div>
                <div className="line">30-03-2024</div>
                <div className="line">B+ve</div>
              </div>
            </div>
            <div className="sectionTwo bioDataSection">
              <div className="description">
                <div className="line">Height</div>
                <div className="line">gender</div>
                <div className="line">Weight</div>
              </div>
              <div className="values">
                <div className="line">173</div>
                <div className="line">Male</div>
                <div className="line">70</div>
              </div>
            </div>
            <div className="sectionThree bioDataSection">
              <div className="description">
                <div className="line">Religion</div>
                <div className="line">Community</div>
                <div className="line">Nationality</div>
              </div>
              <div className="values">
                <div className="line">Hindu</div>
                <div className="line">MBC</div>
                <div className="line">Indian</div>
              </div>
            </div>
            <div className="sectionFour bioDataSection">
              <div className="description">
                <div className="line">Number</div>
                <div className="line">e-mail</div>
                <div className="line">Linkedin</div>
              </div>
              <div className="values">
                <div className="line">+917010948664</div>
                <div className="line">hakash.20040330@gamil.com</div>
                <div className="line">/hakash</div>
              </div>
            </div> */}
          </div>
          <div className="profile-context">
            <div
              className="context-navbar"
              style={{ gridTemplateColumns: `repeat(${navlen},1fr)` }}
            >
              {navbarList.map((e: string, index: number) => {
                return (
                  <div
                    key={`${e}-${index}`}
                    className="context-navbar-element"
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: activeNavbar == e ? "white" : "",
                    }}
                    onClick={() => handleNavbar(e)}
                  >
                    {activeNavbar === e && index != 0 ? (
                      <div className="left-curve"></div>
                    ) : null}
                    {activeNavbar === e && index != navlen - 1 ? (
                      <div className="right-curve"></div>
                    ) : null}
                    {e}
                  </div>
                );
              })}
            </div>
            <div className="context">{children}</div>
          </div>
          {/* <div className="waterMark">Profile</div> */}
        </div>
      </div>
    </>
  );
}
