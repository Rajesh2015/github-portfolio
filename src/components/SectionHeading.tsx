type Props = {
  index: string
  title: string
  comment?: string
}

export default function SectionHeading({ index, title, comment }: Props) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-mono text-2xl font-semibold text-text sm:text-3xl">
        {title}
        {comment && (
          <span className="ml-3 hidden text-base font-normal text-text-dim sm:inline">
            // {comment}
          </span>
        )}
      </h2>
    </div>
  )
}
