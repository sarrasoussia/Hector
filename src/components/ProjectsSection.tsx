import { projectWorks } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section className="section section--projects" id="projects">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Portfolio</span>
          <h2 className="section__title">Project Works</h2>
          <p className="section__subtitle">
            A selection of completed fit-out and construction projects delivered by HECTOR Qatar.
          </p>
        </div>

        <div className="projects-grid">
          {projectWorks.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__image-wrap">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="project-card__content">
                <h3>{project.name}</h3>
                <p className="project-card__location">{project.location}</p>
                <p className="project-card__scope">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
