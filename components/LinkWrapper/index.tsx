
import Link from 'next/link'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

export default function LinkWrapper(props: LinkWrapperProps) {
  return (
    <Link className="fixed z-50 top-0 right-0 mt-2 mr-2 text-hightlight " href={props.href}>
      {props.children}
    </Link>
  )
}
