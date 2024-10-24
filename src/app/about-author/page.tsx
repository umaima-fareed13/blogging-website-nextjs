import Header from "../components/header";
import Link from "next/link"

export default function About () {
    return(
        <div>
            <Header/>
            <div>
                <div>
                    <h1 className="enterPortfolio">
                        click here👇🏻 to check about author
                    </h1>
                </div>
            <Link href={"/portfolio"}>
                    <div className="portfolio"> 
                        PORTFOLIO
                        </div>
                    </Link>
            </div>
        </div>
    )
}