import Button from './Button.js'

export default function CardBody ({date, title, content, link}) {
  return (
    <div>
      <h5>{date}</h5>
      <h3>{title}</h3>
      <p>{content}</p>
      <Button link={link}/>
    </div>
  )
}
