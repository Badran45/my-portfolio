const groups = [
 ['Frontend', 'Core technologies for responsive, accessible web interfaces.', ['HTML', 'CSS', 'JavaScript', 'React']],
 ['Development tools', 'A reliable workflow for building, iterating, and collaborating.', ['Git', 'GitHub', 'VS Code']],
 ['Engineering', 'Practical skills that support useful, well-structured product work.', ['Responsive Design', 'UI Implementation', 'Problem Solving', 'API Integration']]
]
export default function Skills() { return <section id="skills" className="section container"><div className="section-heading reveal"><div><p className="overline">Capabilities</p><h2>A practical toolkit,<br/>used with <em>purpose.</em></h2></div><p>Technologies are only useful when they serve the experience. These are the tools I use to make interfaces clear, adaptable, and ready to grow.</p></div><div className="skill-grid">{groups.map(([title, intro, skills], i) => <article className="skill-card reveal" key={title}><div className="skill-number">0{i + 1}</div><h3>{title}</h3><p>{intro}</p><div className="chips">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></section> }
