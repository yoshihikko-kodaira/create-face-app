import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 border-b border-brack-500  w-full bg-brack">
      <ul className="w-full max-w-3xl m-auto flex font-medium flex-row">
        <li className=' pr-4'>
          <Link className="text-gray-700 hover:text-blue-700" href="/">Home</Link>
        </li>
        <li>
          <Link className="text-gray-700 hover:text-blue-700" href="/private">create face app</Link>
        </li>
      </ul>
    </header>
  )
}