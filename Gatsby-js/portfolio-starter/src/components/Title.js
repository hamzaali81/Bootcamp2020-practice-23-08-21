import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "defaul title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
