import React from 'react';
import { Code, Layout, Cpu, Database, Wrench, Lightbulb } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-5 h-5 text-white" />,
      skills: [
        { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain colored' },
        { name: 'React.js', icon: 'devicon-react-original colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'Responsive Layouts', icon: 'devicon-css3-plain' },
        { name: 'DOM Manipulation', icon: 'devicon-javascript-plain' },
      ],
    },
    {
      title: 'Backend Engineering',
      icon: <Cpu className="w-5 h-5 text-white" />,
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express.js', icon: 'devicon-express-original' },
        { name: 'Python (Flask)', icon: 'devicon-flask-original' },
        { name: 'Python (FastAPI)', icon: 'devicon-fastapi-plain colored' },
        { name: 'REST APIs', icon: 'devicon-python-plain colored' },
        { name: 'EJS', icon: 'devicon-javascript-plain' },
      ],
    },
    {
      title: 'Databases & Architecture',
      icon: <Database className="w-5 h-5 text-white" />,
      skills: [
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Schema Normalization (8-table)', icon: 'devicon-mysql-plain' },
        { name: 'Stored Procedures & Triggers', icon: 'devicon-mysql-plain' },
      ],
    },
    {
      title: 'Languages & Tools',
      icon: <Wrench className="w-5 h-5 text-white" />,
      skills: [
        { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
        { name: 'SQL', icon: 'devicon-mysql-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original' },
        { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
        { name: 'NPM', icon: 'devicon-npm-original-wordmark colored' },
      ],
    },
    {
      title: 'Core Concepts',
      icon: <Lightbulb className="w-5 h-5 text-white" />,
      skills: [
        { name: 'Full-Stack Engineering', icon: 'devicon-react-original' },
        { name: 'CRUD Operations', icon: 'devicon-nodejs-plain' },
        { name: 'API Integration', icon: 'devicon-express-original' },
        { name: 'Authentication Systems', icon: 'devicon-python-plain' },
        { name: 'Version Control', icon: 'devicon-git-plain' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 bg-[#050505] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2 block">
            02. Technical Arsenal
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
            Technical Skills
          </h2>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    {cat.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-0">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="chip-glow text-xs font-medium px-3 py-1.5 rounded-md flex items-center gap-2"
                    >
                      <i className={`${skill.icon} text-sm`} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
