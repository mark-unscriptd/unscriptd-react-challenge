import React from 'react'

export default function ImageDetail(props) {
  const { display_sizes, id } = props.src
  const thumbNailURI = display_sizes.filter(size => size.name === 'thumb')[0].uri
  return (
    <div>
      <img onClick={() => props.changeView(id)} src={thumbNailURI} alt='basketball_image'></img>
    </div>
  )
}