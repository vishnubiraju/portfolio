import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IntroSection from '../../features/IntroSection\'/index.js';
import { fetchTestData } from '../../redux/actions/testAction.js';
import imageUrl from "../../assets/icons/vishnu_image.jpeg";
import mailIcon from "../../assets/icons/mailIcon.svg";
import locationIcon from "../../assets/icons/locationIcon.svg";
import breifcaseIcon from "../../assets/icons/breifcaseIcon.svg";
import linkIcon from "../../assets/icons/linkIcon.svg";
import downloadIcon from "../../assets/icons/downloadIcon.svg";
import NavigationComponent from '../../components/Navigation/index.js';
import "./index.scss";
import MeteorShower from '../../components/MeteorShower/index.js';
import AboutMeSection from '../../features/AboutMeSection/index.js';


function Home() {
    const dispatch = useDispatch();

    // Correct the slice of state to 'state.test'
    const { testData, loading, error } = useSelector((state) => state.testReducer || {}); // Use 'state.test'

    // Fetch data when component mounts
    useEffect(() => {
        dispatch(fetchTestData(1)); // Fetch user data when the component mounts
    }, [dispatch]);


    const introComponentData = {
        introLeftComponentData: {
            imageUrl: imageUrl,
            name: "Vishnu Vardhan Raju Biraju",
            jobTitle: "Full Stack Engineer",
            mail: {
                icon: mailIcon,
                content: "biraju.vishnu@gmail.com",
                altText: "Mail icon"
            },
            location: { 
                icon: locationIcon, 
                content: "Bengaluru, India",
                altText: "Location Icon"
            },
            jobType: {
                icon: breifcaseIcon,
                content: "Full Time",
                altText: "Breifcase Icon"
            },
            website: {
                icon: linkIcon,
                content: "www.google.com",
                altText: "Link Icon"
            },
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React Js",
                "Vue Js",
                "Java",
                "Spring Boot"
            ],
            cvUrl: {
                icon: downloadIcon,
                content: "Download CV",
                link: "www.google.com",
                altText: "Download Icon"
            }
        }
    }

    return (
        <div>
            {/* <div>Home</div>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {testData ? (
                <div>
                    <h2>{typeof testData === 'object' ? JSON.stringify(testData) : testData}</h2>
                </div>
            ) : (
                <p>No data available</p>
            )} */}
            <NavigationComponent />
            <IntroSection introComponentData={introComponentData}/>
            <AboutMeSection/>
            {/* <MeteorShower/> */}
        </div>



    );
}

export default Home;
