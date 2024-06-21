import Image from "next/image";
import profilePic from '../../public/Cer.png'

export default function Home() {
  return (
    <main>
      <div className="text-center">
      <Image 
      src={profilePic}
      alt="Picture of the author"
      width={1200} 
      height={700} 
      
    />
    </div>
    </main>
    
    
    
  );
}
