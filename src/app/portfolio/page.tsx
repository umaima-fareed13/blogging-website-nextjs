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
                <h3 className="color: white;">Career Objective</h3>
                <p className="text">To secure an employment oppurtunity with a progressive organisation,where i can utilize my professional skills and knowledge to the maximum add value in the growth of the organisations.</p>
            </section> 
            
            <section id="certification">
                <h3 className="color: white;">Certifications</h3>
                <p><b>Artificial Intelligence,Web 3.0 & Metaverse:</b>From Governor House Karachi(ongoing)</p>    
            </section>
        </div>

        {/* right section*/} 

        <div className="right-section">
            <h1> About Author</h1>
            <section id="personal-info">
                <h3>Personal Information</h3>
                <p><b>Name:</b> Umaima Fareed</p>
                <p><b>Phone:</b> 1234-5678900</p>
                <p><b>Email:</b> <a href="mailto:umaimafareed07@gmail.com">umaimafareed07@gmail.com</a></p>
                <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/umaima-fareed-26399ba"target="blank">www.LinkedIn.com</a></p>    
            </section>   
            <section id="education">
                <h3>Education</h3>
                <p><b>Intermidiate:</b>private(ongoing)</p>
            </section>
            <section id="skills">
                <h3>Skills</h3>
                <ul className="text">
                    <li>Power Point</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Ms Office</li>
                    <li>Communication Skills</li>
                </ul>
            </section>
            <section id="work experience">
                <h3>work experience</h3>
                <p>seeking an opportunity as a fresh candidate to start my professional career</p>
            </section>
            
            <button id="toggle-skills"><b>Hide/Show Skills</b></button>
        </div> 
    </div>  
    <script src="script.js"></script>
        </div>
    )
}