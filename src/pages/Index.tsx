import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, Instagram, ExternalLink, Code, Database, Globe, Server, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const skills = [
    { name: "Python", icon: Code, color: "bg-blue-500" },
    { name: "JavaScript", icon: Globe, color: "bg-yellow-500" },
    { name: "React.js", icon: Code, color: "bg-blue-600" },
    { name: "Django", icon: Server, color: "bg-green-600" },
    { name: "MongoDB", icon: Database, color: "bg-green-500" },
    { name: "Node.js", icon: Cpu, color: "bg-green-400" },
    { name: "HTML/CSS", icon: Globe, color: "bg-orange-500" },
    { name: "Git", icon: Github, color: "bg-gray-700" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce website with React and Django backend",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      tech: ["React", "Django", "MongoDB", "Stripe"],
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather tracking dashboard with beautiful UI",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      tech: ["JavaScript", "API Integration", "CSS3"],
      featured: false
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/your-profile", color: "text-blue-600" },
    { name: "GitHub", icon: Github, url: "https://github.com/your-username", color: "text-gray-800" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/your-username", color: "text-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
            <div className="flex space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

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
                    onClick={() => window.location.href = 'mailto:john.doe@example.com?subject=Hello&body=Hi John, I would like to discuss...'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    john.doe@example.com
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
            © 2024 John Doe. All rights reserved.
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