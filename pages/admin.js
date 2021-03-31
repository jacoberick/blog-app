import React, {useState, useEffect} from 'react';
import Link from 'next/link';

const Admin = () => {
  return (
    <main>
      <h1>Admin</h1>
      <nav>
        <Link href="/admin/create">
          Create
        </Link>
      </nav>
    </main>
  )
}

export default Admin