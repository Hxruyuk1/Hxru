import Link from "next/link";

export default About
function About() {
  return (
    <div>
      <h1><center>About Page</center></h1>
      <br/>
      <center><Link href={"/"}>Home</Link> |
      <Link href={"/About"}> About </Link>| 
      <Link href={"/Service"}>Service </Link>| 
      <Link href={"/Contact"}>Contact</Link></center>
    </div>
  );
}