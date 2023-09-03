type ContainerProps = {
  children: React.ReactNode
}

export default function Container(props: ContainerProps) {
  return <div className="mx-auto container">{props.children}</div>
}
