import { useSession } from "next-auth/react"
import Link from 'next/link'


const UserMenu = () => {
    const { data: session, status } = useSession()
    
    if (status === "authenticated") {
      return <p>{session?.user?.name}</p>
    }
  
    return <Link href="/api/auth/signin">Sign in</Link>
}

export default UserMenu;