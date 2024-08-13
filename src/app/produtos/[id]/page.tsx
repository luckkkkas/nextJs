"use client"

import { useParams } from 'next/navigation'


export default function Products() {

  const params = useParams();

    return (
      <main>
        <h1>produto {params.id}</h1>
      </main>
    );
  }