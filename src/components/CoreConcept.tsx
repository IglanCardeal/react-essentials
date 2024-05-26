type CoreConceptsProps = {
  title: string
  description: string
  image?: string
  alt?: string
}

export function CoreConcept({
  title,
  description,
  alt,
  image,
}: CoreConceptsProps) {
  return (
    <li>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
