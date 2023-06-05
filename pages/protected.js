import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'

export default function Protected() {
    const {data: session} = useSession()

    return (
        session ? 
            <div>
                <h1>Protected page</h1>
                <p>                    
                    <img className={utilStyles.borderCircle} src={session.user.image}/> 
                    Welcome {session.user.name} 
                    {console.log(session)}                  
                </p>
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
            :
            <div>
                <h1>Protected page</h1>
                <p>You need to be signed in to view this page.</p>
                <button onClick={() => signIn()}>Sign In</button>
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            </div>
    )
}