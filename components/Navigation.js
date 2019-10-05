import Link from 'next/link'

export default () => (
    <ul>
        <li><Link href="/"><a href="/">Home</a></Link></li>
        <li><Link href="/posts"><a href="/posts">Posts</a></Link></li>
        <li><Link href="/frontend"><a href="/frontend">Frontend</a></Link></li>
    </ul>
)
