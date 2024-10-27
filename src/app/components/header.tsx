import Link from "next/link"

export default function Header() {
    return(
        <div className="parentContainer">
            <div className="childContainer1">
                <h1 className="headerTitle">Blogging Websites</h1>
                <ul className="headerText">
                    <Link href={"/"}>
                    <div className="home">Home</div>
                    </Link>
                    <Link href={"/about-author"}>
                    <div className="about">About Author</div>
                    </Link>
                    <Link href={"/contact"}>
                    <div className="contact">Contact</div>
                    </Link>
                </ul>
            </div>
      </div>
    )
}