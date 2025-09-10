import { useState, useEffect } from "react"
import { Filter, ExternalLink, Github, Eye, Users, TrendingUp, Award, Zap, Code, Smartphone, ShoppingCart, Palette } from "lucide-react"

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filters = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "web", label: "Web Development", icon: Code },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "ecommerce", label: "E-commerce", icon: ShoppingCart },
    { id: "design", label: "UI/UX Design", icon: Palette },
  ]

  const projects = [
    {
        id: 1,
        title: "Education Platform",
        category: "web",
        description: "A modern education solution with advanced features and seamless user experience.",
        image: "/education.png",
        tags: ["Wordpress", "Html", "Css", "UI/UX Design"],
        stats: { views: "12.5k", users: "850", growth: "+25%" },
        links: {
          live: "https://codedgeacademy.com/",
          github: "https://github.com"
        },
        featured: true
      },
      {
        id: 2,
        title: "Education Consultancy ",
        category: "web",
        description: "Comprehensive website development and digital marketing strategy that increased conversions by 300%.",
        image: "/enagehub.png",
        tags: [ "Web Development", "SEO","Google Ads","React","Tailwind"],
        stats: { views: "8.2k", users: "420", growth: "+18%" },
        links: {
          live: "https://engage-hub-one.vercel.app/",
          github: "https://github.com"
        }
      },
      {
        id: 3,
        title: "Personal Portfolio",
        category: "web",
        description: "Modern and responsive portfolio website designed to highlight work in web development and design .",
        image: "/portfolio.png",
        tags: ["React Native", "Node.js", "Responsive", "Modern"],
        stats: { views: "15.7k", users: "1.2k", growth: "+32%" },
        links: {
          live: "https://workforayush-portfolio.netlify.app/?fbclid=PAdGRzdgMmrNJleHRuA2FlbQIxMQABp_EBzts8vQrk1p1JeXPYBiNaBKW3cWiFQKXp68JRBeGoPR0_G4XekshIIepF_aem_AoefxL-ha8CLxTs7n1oeZg",
          github: "https://github.com"
        },
        featured: true
      },
      {
        id: 4,
        title: "MICE Website",
        category: "web",
        description: "Unleashing the power of teamwork through creative, high-energy activities. We design experiences that connect, motivate, and transform groups into winning teams.",
        image: "/miceteam.png",
        tags: ["Html", "Node.js", "Responsive", "Modern"],
        stats: { views: "6.4k", users: "280", growth: "+15%" },
        links: {
          live: "https://teambuilding.miceemporio.com/",
          github: "https://github.com"
        }
      },
      {
        id: 5,
        title: "MICE Website",
        category: "web",
        description: "Dynamic event company platform highlighting immersive team-building activities and corporate experiences that spark collaboration, motivation, and lasting connections.",
        image: "/micemain.png",
        tags: ["Html5", "css", "js","Responsive", "Modern"],
        stats: { views: "9.8k", users: "650", growth: "+28%" },
        links: {
          live: "https://miceemporio.com/",
          github: "https://github.com"
        }
      },
      {
        id: 6,
        title: "Service Website",
        category: "web",
        description: "24/7 expert website support platform offering quick fixes, maintenance, and optimization services to keep websites running smoothly and securely.",
        image: "/fastflix.png",
        tags: ["React", "Tailwind css", "Node.js","Responsive", "Modern"],
        stats: { views: "11.3k", users: "890", growth: "+22%" },
        links: {
          live: "https://fastfiks.com/",
          github: "https://github.com"
        }
      }
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10 py-20 px-4 overflow-hidden relative">
      {/* Background Elements (decorative: pointer-events-none so they never block clicks) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-conic from-primary/5 via-secondary/5 to-accent/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '60s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header (unchanged) */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-popup pointer-events-none">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent mb-6 leading-tight">
            Creative Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my collection of innovative digital solutions, from cutting-edge web applications to intuitive mobile experiences.
          </p>
        </div>

        {/* Filter Tabs (unchanged) */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filters.map((filter, index) => {
            const Icon = filter.icon
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 will-transform ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-card hover:bg-muted text-foreground border border-border hover:border-primary/30'
                } animate-popup`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 relative z-10">
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${activeFilter === filter.id ? 'rotate-12' : 'group-hover:rotate-12'}`} />
                  <span>{filter.label}</span>
                </div>
                {activeFilter === filter.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-pulse pointer-events-none"></div>
                )}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2 will-transform animate-popup ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 animate-pulse pointer-events-none">
                  <Zap className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* DARKENING GRADIENT (decorative) -> pointer-events-none so it doesn't block clicks */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Hover Overlay (container is pointer-events-none to avoid blocking by default).
                    Anchors inside have pointer-events-auto and high z-index so they are clickable. */}
                <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 pointer-events-none ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  
                  {/* LIVE link - styled anchor with pointer-events-auto and high z-index */}
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-40 pointer-events-auto bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full transition-all duration-200 hover:scale-110 will-transform inline-flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>

                  {/* GITHUB link */}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-40 pointer-events-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground p-3 rounded-full transition-all duration-200 hover:scale-110 will-transform inline-flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-t-2xl transition-all duration-300 pointer-events-none"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      style={{ animationDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{project.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{project.stats.users}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-accent">
                    <TrendingUp className="w-3 h-3" />
                    <span>{project.stats.growth}</span>
                  </div>
                </div>
              </div>

              {/* Animated Glow Effect (decorative) */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl transform scale-105 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Load More Button (unchanged) */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 will-transform overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              View More Projects
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </button>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-4 w-2 h-2 bg-primary rounded-full animate-ping pointer-events-none"></div>
      <div className="absolute top-3/4 right-8 w-3 h-3 bg-accent rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-secondary rounded-full animate-bounce pointer-events-none"></div>
    </section>
  )
}
