import React from 'react'

export default function ImageDetail(props) {
  const { data } = props
  const thumbNailUri = data.display_sizes.filter(size => size.name === 'thumb')[0].uri
  return (
    <div>
      <img onClick={() => props.changeView(data.id)} src={thumbNailUri} alt='basketball_image'></img>
    </div>
  )
}