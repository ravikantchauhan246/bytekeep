import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside>
      <Link href="/">
        <Image src="https://res.cloudinary.com/do9v8bgv9/image/upload/t_yolo/r9uca0pqqxaawmrjlom2" alt="logo" width={360} height={50} priority />
      </Link>
    </aside>
  )
}

export default Sidebar