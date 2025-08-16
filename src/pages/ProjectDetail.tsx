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
      description: "A full-stack e-commerce website built with Django, featuring user authentication, product catalog, shopping cart, and payment integration.",
      image: "/ecomapp1.png",
      tech: ["Django", "SQLite", "Stripe", "Python", "PostgreSQL"],
      demoUrl: "https://github.com/dulanjaya96/Django-ecom",
      githubUrl: "https://github.com/dulanjaya96/Django-ecom",
      completedDate: "March 2023",
      duration: "1 year",
      features: [
        "User authentication with django-allauth and",
        "Product catalog with browsing, coupons, and refund requests",
        "Shopping cart and checkout with address management",
        "Payment integration using Stripe SDK",
        "Two-Factor Authentication (2FA) with django-two-factor-auth",        
      ],
      challenges: [
        "Implementing secure two-factor authentication flow",
        "Integrating Stripe payments with server-side validation",
        "Managing coupon, refund, and order workflows in Django",        
      ],
      learnings: [
        "Django authentication customization and allauth integration",
        "Secure payment gateway integration using Stripe",
        "Working with Django admin enhancements and filtering",
        "Best practices for production deployment of Django apps"
      ]

    },
    "2": {
      title: "Note App",
      description: "A personal note-taking application with user authentication and CRUD operations, built using the MERN stack (MongoDB, Express.js, React, Node.js) with JWT authentication and rate limiting.",
      image: "/noteapp1.png",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Redis", "Postman"],
      demoUrl: "https://mern-note-app-utkv.onrender.com/",
      githubUrl: "https://github.com/dulanjaya96/mern-note-app",
      completedDate: "july 2025",
      duration: "2 weeks",
      features: [
        "User authentication and authorization with JWT",
        "User registration and login system",
        "Personal note creation, editing, and deletion",        
        "API rate limiting with Redis middleware",
        "Responsive design with Tailwind CSS and DaisyUI",
        "Dark/light theme toggle with persistence",              
        ],
        challenges: [
        "Implementing secure JWT authentication flow",
        "Managing user sessions and token ",        
        "Handling authentication state across components",     
        "Deploying with environment variables on Render.com",        
        ],
        learnings: [
        "RESTful API testing and debugging with Postman", 
        "Full-stack MERN development workflow",
        "JWT authentication and middleware implementation",
        "MongoDB user relationships and data modeling",
        "React state management",
        "API security with rate limiting and CORS",
        "Environment variable management in production",
        "Responsive design with modern CSS frameworks",        
        "Client-server communication with Axios interceptors"
]
    },
    "3": {
      title: "Movie Search App",
      description: "A sleek movie search app that delivers real-time results from TMDb with smart debouncing and trending insights powered by Appwrite",
      image: "/movieapp1.png",
      tech: ["React.js", "API Integration", "Appwrite", "Tailwind CSS", "Debounce", "TMDb API"],
      demoUrl: "https://github.com/dulanjaya96/React.js-movie-web-application",
      githubUrl: "https://github.com/dulanjaya96/React.js-movie-web-application",
      completedDate: "march 2025",
      duration: "1 month",
      features: [
        "Real-time movie search from TMDb API",
        "Debounce for optimized search",
        "Trending movies list using Appwrite",
        "Detailed movie posters and titles",
        "Responsive and clean UI with Tailwind CSS",
        "Error handling and loading indicators"
        ],
        challenges: [
        "Optimizing API calls with debounce",
        "Integrating and querying Appwrite database",
        "Handling inconsistent API responses",        
        ],
        learnings: [
        "Efficient API request optimization",
        "Working with Appwrite for backend services",
        "Practical use of debounce in React",
        "Tailwind CSS for fast UI development"
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