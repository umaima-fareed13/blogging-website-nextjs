import Header from "../components/header";

export default function About () {
    return(
        <div>
            <Header />
            <div className="resume-container ">
        {/* left section */}
         <div className="left-section">
            <img src={"/mypicture.jpg"} alt="Profile Picture" className="profile-picture"/>
            <section id="objective">
                <h3 >Career Objective</h3>
                <p className="text">To secure an employment oppurtunity with a progressive organisation,where i can utilize my professional skills and knowledge to the maximum add value in the growth of the organisations.</p>
            </section> 
            
            <section id="certification">
                <h3>Certifications</h3>
                <p><b>Artificial Intelligence,Web 3.0 & Metaverse:</b>From Governor House Karachi(ongoing)</p>    
            </section>
        </div>

        {/* right section*/} 

        <div className="right-section">
            <h1> About Author</h1>
            <section id="personal-info">
                <h5>Personal Information</h5>
                <p className="information"><b>Name:</b> Umaima Fareed</p>
                <p className="information"><b>Phone:</b> 1234-5678900</p>
                <p className="information"><b>Email:</b> <a href="mailto:umaimafareed07@gmail.com">umaimafareed07@gmail.com</a></p>
                <p className="information"><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/umaima-fareed-26399ba"target="blank">www.LinkedIn.com</a></p>    
            </section>   
            <section id="education">
                <h5>Education</h5>
                <p className="information"><b>Intermidiate:</b>private(ongoing)</p>
            </section>
            <section id="skills">
                <h5>Skills</h5>
                <ul className="text">
                    <li className="skillsText">Power Point</li>
                    <li className="skillsText">HTML</li>
                    <li className="skillsText">CSS</li>
                    <li className="skillsText">JavaScript</li>
                    <li className="skillsText">Ms Office</li>
                    <li>Communication Skills</li>
                </ul>
            </section>
            <section id="work experience">
                <h5>work experience</h5>
                <p className="information">seeking an opportunity as a fresh candidate to start my professional career</p>
            </section>
            </div> 
        </div>     
     </div>
    )
}