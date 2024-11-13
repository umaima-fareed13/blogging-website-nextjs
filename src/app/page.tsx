import Header from "./components/header";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Home(){
  return(
    <div className="homeMaincontainer">
      <Header/>
      <div className="childContainer">
      <div className="hometitleContainer focus-in-contract">
        <h1 className="welcomePage">Welcome to my Blogging Page</h1>
      </div>
        <div className="firstBox shadow-pop-bl">
        <h1 className="firstblogContainer">Blog</h1>
        <div className="blogboxContainer">
          <div className="picture">
            <img src={"/typescript.jpg"} alt="Image" />
          </div> 
          <div>
            <p className="typescript">
              TypeScript is a superset of JavaScript that adds static type checking to the language. TypeScript supports features such as type annotations, interfaces, and classes.
            </p>
          </div> 
        </div>
      </div>
      <div className="seceondBox shadow-pop-bl">
        <h1 className="firstblogContainer">Blog</h1>
        <div className="blogboxContainer">
          <div className="picture">
            <img src={"/javascript.jpg"} alt="Image" />
          </div>
          <div>
            <p className="javascript">
              JavaScript is a interpreted programming language that conforms to the ECMAScript specification, and it has been widely adopted for web development,
           </p>
          </div>
        </div>
      </div>
      <div className="thirdBox shadow-pop-bl">
        <h1 className="firstblogContainer">Blog</h1>
        <div className="blogboxContainer">
          <div className="picture">
            <img src={"/nextjs.jpg"} alt="Image" />
            </div>
            <div>
              <p className="nextjs">
                 Next.js is a React framework that enables server-side rendering and static site generation. It's a great choice for building blogs, & e-commerce website.
              </p>
            </div>
        </div>
      </div>
      <div className="firstBox shadow-pop-bl">
        <h1 className="firstblogContainer">Blog</h1>
        <div className="blogboxContainer">
          <div className="picture">
            <img src={"/html.jpg"} alt="Image" />
            </div>
            <div>
              <p className="html">
                HTML is the standard markup language for creating web pages. It consists of a series of elements, tags, and attributes.
              </p>
        </div>
      </div>
      </div>
      <div className="seceondBox shadow-pop-bl">
        <h1 className="firstblogContainer">Blog</h1>
        <div className="blogboxContainer">
          <div className="picture">
            <img src={"/css.jpg"} alt="Image" />
            </div>
            <div>
              <p className="css">
                CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.
              </p>
            </div>  
        </div>
      </div>
      <div className="thirdBox shadow-pop-bl">
        <h1 className="firstblogContainer">Blog</h1>
        <div className="blogboxContainer">
          <div className="picture">
            <img src={"/tailwind.jpg"} alt="Image" />
            </div>
            <div>
              <p className="tailwind">
                Tailwind CSS is a utility-first CSS framework that provides a modern, responsive, and accessible design system.
              </p>
            </div>
        </div>
      </div>
      {/* </div> */}
      <hr/>
        <div className="group-3">
        <div className="contactFooter">
            <h4 className="title">Contact</h4>
            <div className="contact_info">
                <p className="descriptionFooter">
                    Bahria Town Karachi 
                </p>
                <p className="descriptionFooterbold">
                    +92 321 8318143
                </p>
                <p className="descriptionFooterbold">
                    umaimafareed07@gmail.com
                </p>
            </div>
        </div>    
        <div className="socials">
            <h4 className="title">Socials</h4>
            <div className="social_items">
                <a href="#" className="social_items">
                <FaSquareInstagram /> 
                    <span>  umaima-x-fareed</span>
                </a>
            </div>
            <div>
                <a href="#" className="social_item">
                    <FaGithub />
                     <span>umaimafareed07</span>
                </a>
            </div>
            <div>
                <a href="#" className="social_item">
                    <FaDiscord />
                     <span>umaimafareed_08955</span>
                </a>
            </div>
        </div>
        </div>
        </div>
    </div>
    
  )
}