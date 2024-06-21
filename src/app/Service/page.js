import Link from "next/link"


export default Service
function Service() {
  return (
    <div>
      <h1><center>Service Page</center></h1>
      <br/>
      <center><Link href={"/"}>Home</Link> |
      <Link href={"/About"} > About </Link>| 
      <Link href={"/Service"}>Service </Link>| 
      <Link href={"/Contact"}>Contact</Link></center>
    </div>
  )
}


