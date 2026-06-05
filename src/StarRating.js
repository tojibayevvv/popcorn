const starContainer = {
    display: "flex",
    alignItems: "center",
    gap: "15px"
}

const starItem = {
    display: "flex",
    alignItems: "center",
    gap: "5px"
}

export default function StarRating({maxRating = 3}) {
  return (
    <div style={starContainer}>
        <div style={starItem}>{Array.from({length: maxRating}, (_, i) => (
            <span>S{i + 1}</span>
        ))}</div>
        <div>10</div>
    </div>
  )
}
