import React from 'react'

export default function ImageDetail(props) {
  const { image, id } = props
  return (
    <div>
      <img onClick={() => props.changeView(id)} src={image} alt='basketball_image'></img>
    </div>
  )
}