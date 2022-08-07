import CardHeader from './CardHeader'
import CardBody from './CardBody'

export default function Card ({category, image, date, title, content, link}) {
  return (
    <div>
      <CardHeader category={category} image={image} />
      <CardBody date={date} title={title} content={content} link={link} />
    </div>
  )
}
