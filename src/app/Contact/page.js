import Link from "next/link"

export default Learn
function Learn() {
  return (
    <div>
      <h1><center>Contact Page</center></h1>
      <br/>
      <center><Link href={"/"}>Home</Link> |
      <Link href={"/About"}> About </Link>| 
      <Link href={"/Service"}>Service </Link>| 
      <Link href={"/Contact"}>Contact</Link></center>
    </div>
  )
}


