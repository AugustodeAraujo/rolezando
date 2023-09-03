type AboutProps = {
  title: string
  description: string
}

export default function About(props: AboutProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-hightlight text-3xl font-bold mr-auto">
        {props.title}
      </h1>
      <p className="mt-2 text-left text-white">{props.description}</p>
    </div>
  )
}
