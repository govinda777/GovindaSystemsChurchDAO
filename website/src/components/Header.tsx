import Link from "next/link";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Govinda Systems
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/protocol" className="hover:text-gray-300">
            Protocol
          </Link>
          <Link href="/cults" className="hover:text-gray-300">
            Cultos
          </Link>
          <Link href="/events" className="hover:text-gray-300">
            Events
          </Link>
          <Link href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
          <LoginButton />
        </div>
      </nav>
    </header>
  );
}