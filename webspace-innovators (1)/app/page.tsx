import { SidebarNav } from "@/components/sidebar-nav"
import { Logo } from "@/components/logo"

const teamMembers = [
  {
    name: "George Zwane",
    image: "/professional-headshot-man-glasses.png",
  },
  {
    name: "Maite Selowa",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Junior Mabuza",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Letlhogonolo Phiri",
    image: "/professional-headshot-person.png",
  },
]

const technologies = [
  ["Flutter", ".NET Framework", "SQL Server"],
  ["Visual Studio Code", "C#"],
  ["HTML", "CSS", "JavaScript"],
  ["React", "TypeScript"],
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarNav />

      {/* Main Content */}
      <div className="lg:ml-20">
        {/* Header */}
        <header className="fixed top-0 right-0 left-0 lg:left-20 z-30 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Logo />
            <button className="px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
              Get Started
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary text-sm font-mono mb-4">WebSpace Innovators • Team 36</p>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                  Meet ProBuildManager,
                  <br />
                  the Future of
                  <br />
                  Construction Management
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A comprehensive construction project management solution for ThobileM Building Construction,
                  streamlining multiple projects, resource management, and record-keeping.
                </p>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <p>
                    <span className="text-primary font-semibold">Sponsor:</span> ThobileM Construction
                  </p>
                  <p>
                    <span className="text-primary font-semibold">Mentor:</span> Dr S. Sithungu
                  </p>
                </div>
              </div>
              <div className="relative">
                <img src="/astronaut-in-space-suit.jpg" alt="ProBuildManager Project" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-6 py-20">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-3 h-3 rounded-full bg-primary mt-2" />
              <div className="w-3 h-3 rounded-full bg-primary/60 mt-2" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-12">About ProBuildManager</h2>
            <div className="space-y-6 text-lg text-foreground leading-relaxed mb-12">
              <p>
                ProBuildManager is a comprehensive construction management system designed for ThobileM Building
                Construction,
                <br />
                addressing the challenges of manual tracking and spreadsheet-based workflows.
              </p>
              <p className="text-muted-foreground">
                Founded in November 2019 and based in Roodepoort, Gauteng, ThobileM specializes in school construction,
                water pipelines, and roads, delivering high-quality infrastructure across the region.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
              {[
                {
                  title: "MULTIPLE PROJECT MANAGEMENT",
                  image: "/event-planning-calendar.jpg",
                },
                {
                  title: "RESOURCE MANAGEMENT",
                  image: "/judge-gavel-scoring.jpg",
                },
                {
                  title: "RECORD KEEPING",
                  image: "/photo-gallery-grid.jpg",
                },
                {
                  title: "EFFECTIVE REPORTS",
                  image: "/recruitment-hiring-team.jpg",
                },
              ].map((feature, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg border-2 border-primary">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-bold leading-tight">{feature.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-primary/30 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Environmental Sustainability</h3>
                <p className="text-muted-foreground">
                  Reducing paper waste and manual processes through digital transformation.
                </p>
              </div>
              <div className="p-6 border border-primary/30 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Ease of Use</h3>
                <p className="text-muted-foreground">
                  Intuitive interface designed for construction professionals with minimal training required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="min-h-screen flex items-center px-6 py-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16">The WebSpace Innovators Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{member.name.toUpperCase()}</h3>
                  <a href="#" className="text-primary hover:underline text-sm">
                    LinkedIn Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="min-h-screen flex items-center px-6 py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16">The Tech Stack</h2>
            <div className="space-y-8">
              {technologies.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
                  {row.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-8 py-4 border-2 border-foreground bg-transparent text-foreground font-bold text-lg hover:bg-foreground hover:text-background transition-all cursor-pointer min-w-[180px] text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-6">
          <div className="container mx-auto text-center text-sm text-muted-foreground">
            <p>© 2025 WebSpace Innovators. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
