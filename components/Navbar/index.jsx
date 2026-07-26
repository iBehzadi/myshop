import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>myshop</h1>
        <ul>
            <li>
                <Link href={'/'}>My Eccommerce</Link>
            </li>
            <li><Link href={'/products'}>Products</Link></li>
            <li><Link href={'/checkout'}>Checkout</Link></li>
        </ul>
    </nav>
  )
}
