import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, Instagram, ExternalLink, Code, Database, Globe, Server, Cpu, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: "Python", icon: Code, color: "bg-blue-500" },
    { name: "JavaScript", icon: Globe, color: "bg-yellow-500" },
    { name: "React.js", icon: Code, color: "bg-blue-600" },
    { name: "Django", icon: Server, color: "bg-green-600" },
    { name: "MongoDB", icon: Database, color: "bg-green-500" },
    { name: "Node.js", icon: Cpu, color: "bg-green-400" },
    { name: "Tailwind CSS", icon: Globe, color: "bg-orange-500" },
    { name: "Git", icon: Github, color: "bg-gray-700" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website built with Django, featuring user authentication and payment integration",
      image: "/ecomapp1.png",
      tech: ["Django", "SQLite", "Stripe", "Python", "HTML", "CSS", "JavaScript"],
      featured: true
    },
    {
      id: 2,
      title: "Note App",
      description: "A full-stack note-taking application featuring JWT-based authentication and CRUD operations",
      image: "/noteapp1.png",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      featured: true
    },
    {
      id: 3,
      title: "Movie Search App",
      description: "Real-time movie search app with smart debouncing and trending tracking via Appwrite",
      image: "/movieapp1.png",
      tech: ["React.js", "Appwrite", "Tailwind CSS", "Debounce", "TMDb API"],
      featured: false
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/dulanjaya-hapuarachchi-1205a4153", color: "text-blue-600" },
    { name: "GitHub", icon: Github, url: "https://github.com/dulanjaya96", color: "text-gray-800" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/dulanjaya_", color: "text-pink-600" }
  ];

  const navLinks = [
    { href: "/Dulanjaya_CV_SoftwareEngineer.pdf", label: "My Resume", isExternal: true },
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const handleNavClick = (href, isExternal) => {
    setIsMenuOpen(false);
    if (isExternal) {
      window.open(href, '_blank', 'noopener noreferrer');
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="hover:text-primary transition-colors"
                  onClick={link.isExternal ? undefined : (e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.isExternal);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2 border-t border-border/50 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.isExternal)}
                  className="block w-full text-left px-4 py-3 rounded-md hover:bg-secondary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Hi, I'm <span className="text-primary">Dulanjaya Hapuarachchi</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in">
                Software Engineer & Full Stack Developer
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in">
                Passionate about creating innovative solutions and building scalable applications. 
                I specialize in modern web technologies and love turning ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Projects
                </Button>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img 
                    src="/profile_pic.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} className="hover:shadow-lg transition-shadow hover-scale">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out some of my recent work and personal projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-shadow hover-scale cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary">Featured</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >                  
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out if you have any questions or would like to collaborate on a project.
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = 'mailto:nc.dulanjaya@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Dulanjaya%2C%0A%0AI%27d%20like%20to%20discuss...%0A%0ARegards%2C%0A'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    <a href="mailto:nc.dulanjaya@gmail.com" className="underline">nc.dulanjaya@gmail.com</a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href="tel:+94718798719" className="underline">WhatsApp | Mobile +94718798719</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            © 2025 Dulanjaya Hapuarachchi. All rights reserved.
          </p>
          <div className="flex gap-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full hover:bg-secondary transition-colors ${social.color}`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;