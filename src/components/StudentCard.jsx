import React from "react"

function StudentCard({ student }) {
  return (
    <section>
      <h2>{student.name}</h2>
      <p>{student.age}</p>
      <p>{student.id}</p>
      <p>{student.term}</p>
    </section>
  )
}

export default StudentCard
