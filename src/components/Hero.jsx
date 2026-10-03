import { useState } from 'react'
import Icon from './Icon'
const social = [['github', 'GitHub', 'https://github.com/MohamedBadran01'], ['linkedin', 'LinkedIn', 'https://www.linkedin.com/in/mohamedmbadran'], ['mail', 'Email', 'mailto:moahmedbadran777@gmail.com']]

export default function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true)
  return <section id="top" className="hero section container">
    <div className="hero-copy reveal">
      <p className="eyebrow"><span></span> Available for opportunities</p>
      <p className="greeting">Hi, I'm Mohamed Mosaad Badran</p>
      <h1>Frontend Developer building <em>clear, responsive web experiences.</em></h1>
      <p className="hero-lead">A Software Engineering &amp; Multimedia student focused on clean UI, maintainable React interfaces, and the details that make a website easier to use.</p>
      <div className="hero-actions"><a className="button primary" href="#projects">View my work <Icon name="arrow" /></a><a className="button text-button" href="#contact">Let's work together <span>↗</span></a></div>
      <div className="hero-socials">{social.map(([icon, label, href]) => <a key={label} href={href} target={icon !== 'mail' ? '_blank' : undefined} rel="noreferrer" aria-label={label}><Icon name={icon}/></a>)}</div>
    </div>
    <div className="hero-visual portrait-visual reveal">
      <div className="portrait-backdrop"></div>
      <div className="portrait-frame">
        {photoAvailable && <img src="/mohamed-badran.jpg" alt="Mohamed Mosaad Badran, Frontend Developer" onError={() => setPhotoAvailable(false)} />}
        {!photoAvailable && <div className="portrait-placeholder"><span>MB</span><small>Add your photo as<br/><code>public/mohamed-badran.jpg</code></small></div>}
      </div>
      <div className="floating-card card-a"><span className="card-icon">✦</span><div><strong>Frontend Developer</strong><small>Clean UI · Responsive builds</small></div></div>
      <div className="floating-card card-b"><span className="status-dot"></span><div><strong>Alexandria, Egypt</strong><small>Open to opportunities</small></div></div>
    </div>
  </section>
}
