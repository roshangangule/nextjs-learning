import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>THE HOME PAGE</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  )
}
