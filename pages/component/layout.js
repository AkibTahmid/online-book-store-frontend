import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
export default function Layout({children}){
    return(
        <>
    <Head>
      <title>Online Book Store</title>
      <link rel="icon" href="book.png"></link>
    </Head>
    <h3>Online Book Store</h3>
    <Image src="/book.png" width="100" height="100"/>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
    </nav>
    {children}
    <footer style={{position: "absolute", bottom: 0, width: "100%"}}>Copyright By AB</footer>
        </>
    )
}