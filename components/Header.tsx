import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-blue-500 text-white'>

      <Link href="/" className='mr-2'>Home</Link>
      <Link href="/todos">Todos</Link>
    </header>
  )
}

export default Header