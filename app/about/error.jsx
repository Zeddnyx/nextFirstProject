"use client"

export default function error({error, reset}) {
  return <div>
    {error.message}
    <button onClick={() => reset()} >Go Back</button>
  </div>
}
