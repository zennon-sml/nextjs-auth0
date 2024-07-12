import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1>Home</h1>

      <ul className="list-none p-0 m-0 flex gap-4">
        <li>
          <Link href="/api/auth/login">
            Login
          </Link>
        </li>
        <li>
          <Link href="/api/auth/me">
            Me
          </Link>
        </li>
        <li>
          <Link href="/api/auth/logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}
