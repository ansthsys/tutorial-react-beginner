export default function CardHeader ({category, image}) {
  return (
    <div>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </div>
  )
}
