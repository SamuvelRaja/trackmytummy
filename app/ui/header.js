import Image from "next/image";
export default function Header(){
    return(
        <header className="w-screen ">
            <div className="logo">
                <Image src="/next.svg"></Image>
            </div>
        </header>
    );
}