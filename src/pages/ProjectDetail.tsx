import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Database, Globe, Server } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data (in a real app, this would come from an API or database)
  const projects = {
    "1": {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website built with React and Django, featuring user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=400&fit=crop",
      tech: ["React", "Django", "MongoDB", "Stripe", "Redux", "Python"],
      demoUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/your-username/ecommerce-platform",
      completedDate: "March 2024",
      duration: "3 months",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for product management",
        "Responsive design for all devices",
        "Real-time inventory tracking",
        "Order history and tracking"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Optimizing database queries for large product catalogs",
        "Creating responsive design for mobile devices",
        "Integrating third-party APIs"
      ],
      learnings: [
        "Advanced React patterns and state management",
        "Django REST framework for API development",
        "Payment gateway integration",
        "Database optimization techniques"
      ]
    },
    "2": {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, built using React and Node.js with Socket.io for real-time communication.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
      demoUrl: "https://demo-taskmanager.com",
      githubUrl: "https://github.com/your-username/task-manager",
      completedDate: "February 2024",
      duration: "2 months",
      features: [
        "Real-time collaborative editing",
        "Task assignment and tracking",
        "Team management and permissions",
        "File attachment support",
        "Notification system",
        "Progress tracking and analytics",
        "Mobile-responsive interface",
        "Dark/light theme toggle"
      ],
      challenges: [
        "Implementing real-time synchronization",
        "Managing complex state across multiple users",
        "Ensuring data consistency",
        "Optimizing performance for large teams"
      ],
      learnings: [
        "WebSocket programming with Socket.io",
        "Real-time application architecture",
        "Advanced state management",
        "Performance optimization techniques"
      ]
    },
    "3": {
      title: "Weather Dashboard",
      description: "A beautiful weather tracking dashboard that provides real-time weather information with interactive charts and forecasts.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      tech: ["JavaScript", "API Integration", "CSS3", "Chart.js", "HTML5"],
      demoUrl: "https://demo-weather.com",
      githubUrl: "https://github.com/your-username/weather-dashboard",
      completedDate: "January 2024",
      duration: "1 month",
      features: [
        "Current weather conditions",
        "5-day weather forecast",
        "Interactive weather charts",
        "Location search and geolocation",
        "Weather alerts and notifications",
        "Historical weather data",
        "Beautiful animations and transitions",
        "Responsive design"
      ],
      challenges: [
        "Working with multiple weather APIs",
        "Creating smooth animations",
        "Handling geolocation permissions",
        "Optimizing API calls"
      ],
      learnings: [
        "API integration best practices",
        "Advanced CSS animations",
        "Chart.js for data visualization",
        "Browser geolocation API"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
            <h1 className="text-2xl font-bold text-primary">Project Details</h1>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Project Header */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-xl opacity-90">{project.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Project Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Completed</h4>
                    <p className="text-muted-foreground">{project.completedDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Duration</h4>
                    <p className="text-muted-foreground">{project.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Challenges & Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learnings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  What I Learned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Demo
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;