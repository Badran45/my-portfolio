import { useEffect, useState } from 'react'

const links = ['About', 'Skills', 'Services', 'Projects', 'Journey']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -55%' })
    links.forEach(link => { const el = document.getElementById(link.toLowerCase()); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])
  return <header className="nav-wrap">
    <nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Mohamed Badran home"><span>MB</span><i>Mohamed Badran</i></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><span></span><span></span></button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(link => <a className={active === link.toLowerCase() ? 'active' : ''} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}
        <a className="nav-cta" onClick={() => setOpen(false)} href="#contact">Let's talk <span>↗</span></a>
      </div>
    </nav>
  </header>
}
