// Mock data for Mutex Corp website

export const companyInfo = {
  name: "Mutex Corp",
  tagline: "Your Global Technology Partner for Transformative Digital Solutions",
  description: "Mutex Corp is a trusted digital transformation solutions company that leverages AI to bring about digital business transformation for its clients.",
  // address: "3333 Preston Rd, STE 300, Frisco, TX 75034",
  //  address: "7700 preston rd, STE#402, Frisco, TX 75034",
  address: "KRN Complex, Kadapa Tirupati Road, Rajampet, AP, India - 516115",
  email: "contact@mutexsoftsolution.com",
  // phone: "+1 (469) 555-0123",
  phone: "+91 9491379246 ",
  founded: "2015",
  employees: "500+",
  clients: "200+",
  offices: "5"
};

export const navItems = [
  {
    label: "Solutions",
    hasDropdown: true,
    items: [
      { label: "AI & Automation", href: "/solutions/ai-automation" },
      { label: "Data & Analytics", href: "/solutions/data-analytics" },
      { label: "Cloud Services", href: "/solutions/cloud-services" },
      { label: "Cybersecurity", href: "/solutions/cybersecurity" },
      { label: "Digital Product Engineering", href: "/solutions/digital-engineering" }
    ]
  },
  {
    label: "AI Consulting",
    hasDropdown: true,
    items: [
      { label: "Machine Learning Solutions", href: "/ai-consulting/machine-learning" },
      { label: "Natural Language Processing", href: "/ai-consulting/nlp" },
      { label: "Computer Vision Services", href: "/ai-consulting/computer-vision" },
      { label: "AI Strategy & Implementation", href: "/ai-consulting/strategy" },
      { label: "Data Analytics & Insights", href: "/ai-consulting/data-analytics" },
      { label: "Automation & Process Optimization", href: "/ai-consulting/automation" },
      { label: "AI Ethics & Governance", href: "/ai-consulting/ethics" },
      { label: "Custom AI Model Development", href: "/ai-consulting/custom-models" }
    ]
  },
  {
    label: "Industries",
    hasDropdown: true,
    items: [
      { label: "Banking & Financial Services", href: "/industries/banking" },
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Retail & CPG", href: "/industries/retail" },
      { label: "Energy & Utilities", href: "/industries/energy" },
      { label: "Hi-Tech", href: "/industries/hi-tech" }
    ]
  },
  {
    label: "Company",
    hasDropdown: true,
    items: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" }
    ]
  },
  { label: "Insights", href: "/insights", hasDropdown: false },
  { label: "Contact Us", href: "/contact", hasDropdown: false }
];

export const heroSlides = [
  {
    id: 1,
    title: "Your Global Technology Partner for Transformative Digital Solutions",
    subtitle: "Bringing Technology and Talent Solutions Together",
    cta: "Learn More About Mutex",
    link: "/about"
  },
  {
    id: 2,
    title: "AI-Powered Innovation for Your Business",
    subtitle: "Harness the power of artificial intelligence to drive growth",
    cta: "Explore AI Solutions",
    link: "/ai-consulting"
  },
  {
    id: 3,
    title: "Digital Transformation Excellence",
    subtitle: "Transform your business with cutting-edge technology solutions",
    cta: "Get Started",
    link: "/contact"
  }
];

export const achievements = [
  {
    id: 1,
    highlight: "Leader",
    title: "AI & Machine Learning Excellence",
    text: "Recognized in Everest Group PEAK Matrix® Assessment 2025 for Enterprise AI Solutions",
    icon: "Brain",
    metric: "98%",
    metricLabel: "Client Satisfaction",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    highlight: "Top Rated",
    title: "Custom Application Development",
    text: "Leader in Mid-Market Enterprise Solutions - PEAK Matrix® Assessment 2025",
    icon: "Code",
    metric: "500+",
    metricLabel: "Projects Delivered",
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 3,
    highlight: "Market Leader",
    title: "Digital Transformation",
    text: "Industry-leading Digital Transformation Service Provider 2024",
    icon: "Rocket",
    metric: "40%",
    metricLabel: "Cost Reduction",
    color: "from-orange-500 to-yellow-400"
  },
  {
    id: 4,
    highlight: "Excellence",
    title: "Cloud Innovation Partner",
    text: "Premier Cloud Solutions Partner for AWS, Azure & Google Cloud",
    icon: "Cloud",
    metric: "200+",
    metricLabel: "Cloud Migrations",
    color: "from-green-500 to-teal-400"
  }
];

export const successStories = [
  {
    id: 1,
    title: "AI-Powered Customer Analytics Platform",
    description: "Developed an ML-driven analytics solution that increased customer retention by 35%",
    image: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=600&h=400&fit=crop",
    category: "AI & Analytics"
  },
  {
    id: 2,
    title: "Enterprise Cloud Migration for Fortune 500",
    description: "Successfully migrated 200+ applications to cloud, reducing infrastructure costs by 40%",
    image: "https://images.unsplash.com/photo-1653564142033-ab3532091515?w=600&h=400&fit=crop",
    category: "Cloud Services"
  },
  {
    id: 3,
    title: "NLP-Based Document Processing System",
    description: "Automated document processing reducing manual effort by 80% for healthcare provider",
    image: "https://images.pexels.com/photos/16094062/pexels-photo-16094062.jpeg?w=600&h=400&fit=crop",
    category: "Natural Language Processing"
  }
];

export const industries = [
  {
    id: 1,
    name: "Banking & Financial Services",
    description: "Our expertise enables banks and financial service providers to harness the latest in technology, streamline operations, and meet regulatory demands.",
    icon: "Building2"
  },
  {
    id: 2,
    name: "Healthcare & Life Sciences",
    description: "We partner with payers, providers, life sciences, and digital health companies to streamline operations, reduce costs, and create seamless patient experiences.",
    icon: "Heart"
  },
  {
    id: 3,
    name: "Manufacturing",
    description: "Our experts help manufacturers embrace change with efficiency, innovation, and a forward-thinking mindset.",
    icon: "Factory"
  },
  {
    id: 4,
    name: "Retail & CPG",
    description: "We specialize in customized strategies and technology solutions to address the unique challenges within key retail and CPG segments.",
    icon: "ShoppingCart"
  },
  {
    id: 5,
    name: "Energy & Utilities",
    description: "Our innovative IT solutions help industry leaders enhance grid reliability and operational efficiency through decarbonization and digitization.",
    icon: "Zap"
  },
  {
    id: 6,
    name: "Hi-Tech",
    description: "Mutex provides a wide range of Hi-tech offerings, helping businesses establish, strengthen, and secure their networks on scale.",
    icon: "Cpu"
  }
];

export const solutions = [
  {
    id: 1,
    name: "AI & Automation",
    description: "Simplify Complexity With AI-Driven Optimization",
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Data & Analytics",
    description: "Explore The Potential Of Analytics To Reveal Complex Relationships Within Volumes of Data",
    icon: "BarChart3",
    image: "https://images.unsplash.com/photo-1653564142033-ab3532091515?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Cloud Services",
    description: "Power Your Future In The Cloud Today With Multi-Cloud Solutions",
    icon: "Cloud",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Cybersecurity",
    description: "Ensure Continuous Compliance In Dynamic Environments; Verify Everything, Trust Nothing",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Digital Product Engineering",
    description: "Real-Time Processing, Accelerated Innovation & Empowered Teams",
    icon: "Code2",
    image: "https://images.pexels.com/photos/16094062/pexels-photo-16094062.jpeg?w=500&h=300&fit=crop"
  }
];

export const aiConsultingServices = [
  {
    id: 1,
    name: "Machine Learning Solutions",
    shortDesc: "Build predictive models that transform raw data into actionable business intelligence",
    fullDesc: "Our machine learning experts develop custom algorithms and models tailored to your specific business challenges. From predictive analytics to recommendation systems, we help you leverage ML to gain competitive advantages.",
    icon: "Brain",
    benefits: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Continuous Learning Systems"]
  },
  {
    id: 2,
    name: "Natural Language Processing",
    shortDesc: "Unlock insights from unstructured text data with advanced NLP capabilities",
    fullDesc: "Transform how your business handles text data with our NLP solutions. From sentiment analysis to document classification and chatbots, we build intelligent systems that understand and process human language.",
    icon: "MessageSquare",
    benefits: ["Sentiment Analysis", "Text Classification", "Entity Recognition", "Intelligent Chatbots"]
  },
  {
    id: 3,
    name: "Computer Vision Services",
    shortDesc: "Enable machines to interpret and act on visual information",
    fullDesc: "Our computer vision solutions help businesses automate visual inspection, enhance security systems, and create innovative customer experiences through image and video analysis.",
    icon: "Eye",
    benefits: ["Image Recognition", "Object Detection", "Visual Inspection", "Video Analytics"]
  },
  {
    id: 4,
    name: "AI Strategy & Implementation",
    shortDesc: "Develop a comprehensive AI roadmap aligned with your business objectives",
    fullDesc: "We help organizations define their AI vision, identify high-value use cases, and create actionable implementation roadmaps that deliver measurable business outcomes.",
    icon: "Target",
    benefits: ["AI Readiness Assessment", "Use Case Identification", "ROI Analysis", "Implementation Roadmap"]
  },
  {
    id: 5,
    name: "Data Analytics & Insights",
    shortDesc: "Transform data into strategic business insights that drive growth",
    fullDesc: "Our data analytics services help you make sense of complex data landscapes, providing actionable insights that inform strategic decisions and optimize operations.",
    icon: "LineChart",
    benefits: ["Business Intelligence", "Real-time Dashboards", "Data Visualization", "Predictive Insights"]
  },
  {
    id: 6,
    name: "Automation & Process Optimization",
    shortDesc: "Streamline operations with intelligent automation solutions",
    fullDesc: "Leverage AI-powered automation to eliminate repetitive tasks, reduce errors, and free your workforce to focus on high-value activities that drive innovation.",
    icon: "Cog",
    benefits: ["Process Automation", "Workflow Optimization", "RPA Integration", "Efficiency Gains"]
  },
  {
    id: 7,
    name: "AI Ethics & Governance",
    shortDesc: "Build responsible AI systems with robust governance frameworks",
    fullDesc: "We help organizations develop ethical AI practices, ensure compliance with regulations, and build trustworthy AI systems that align with your values and industry standards.",
    icon: "Scale",
    benefits: ["Bias Detection", "Explainable AI", "Compliance Frameworks", "Risk Management"]
  },
  {
    id: 8,
    name: "Custom AI Model Development",
    shortDesc: "Build bespoke AI solutions tailored to your unique business needs",
    fullDesc: "Our team of AI engineers and data scientists work closely with you to design, develop, and deploy custom AI models that address your specific challenges and opportunities.",
    icon: "Layers",
    benefits: ["Custom Algorithms", "Model Training", "Performance Optimization", "Scalable Deployment"]
  }
];

export const partners = [
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Google Cloud", logo: "https://www.gstatic.com/devrel-devsite/prod/v0e0f589edd85502a40d78d7d0825db8ea5ef3b99ab4070381ee86977c9168730/cloud/images/cloud-logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
];

export const insights = [
  {
    id: 1,
    type: "Blog",
    date: "July 15, 2025",
    title: "The Future of AI in Enterprise: 2025 Trends",
    excerpt: "Discover the key AI trends shaping enterprise technology in 2025 and beyond.",
    image: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    type: "Whitepaper",
    date: "June 28, 2025",
    title: "Navigating the Generative AI Landscape",
    excerpt: "A comprehensive guide to selecting and enhancing pretrained large language models.",
    image: "https://images.unsplash.com/photo-1653564142033-ab3532091515?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    type: "Success Story",
    date: "June 10, 2025",
    title: "AI-Driven Process Automation Success",
    excerpt: "How we helped a Fortune 500 company achieve 60% efficiency gains through AI automation.",
    image: "https://images.pexels.com/photos/16094062/pexels-photo-16094062.jpeg?w=400&h=250&fit=crop"
  }
];

export const stats = [
  { value: "10+", label: "Years in IT Services" },
  { value: "5", label: "Office & Delivery Centers Globally" },
  { value: "200+", label: "Clients Across Mid-market and Fortune 1000 Enterprises" }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechVenture Inc.",
    text: "Mutex Corp transformed our data infrastructure completely. Their AI solutions have given us insights we never thought possible.",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "VP of Operations, GlobalRetail",
    text: "The team at Mutex delivered beyond our expectations. Their expertise in automation saved us millions in operational costs.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director of IT, HealthFirst",
    text: "Working with Mutex on our digital transformation was seamless. They truly understand the healthcare industry's unique challenges.",
    avatar: "ER"
  }
];

export const footerLinks = {
  solutions: [
    { label: "AI & Automation", href: "/solutions/ai-automation" },
    { label: "Data & Analytics", href: "/solutions/data-analytics" },
    { label: "Cloud Services", href: "/solutions/cloud-services" },
    { label: "Cybersecurity", href: "/solutions/cybersecurity" },
    { label: "Digital Engineering", href: "/solutions/digital-engineering" }
  ],
  aiConsulting: [
    { label: "Machine Learning", href: "/ai-consulting/machine-learning" },
    { label: "NLP Solutions", href: "/ai-consulting/nlp" },
    { label: "Computer Vision", href: "/ai-consulting/computer-vision" },
    { label: "AI Strategy", href: "/ai-consulting/strategy" },
    { label: "Custom AI Development", href: "/ai-consulting/custom-models" }
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" }
  ]
};

export const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/mutexcorp", icon: "Linkedin" },
  { name: "Twitter", href: "https://twitter.com/mutexcorp", icon: "Twitter" },
  { name: "Facebook", href: "https://facebook.com/mutexcorp", icon: "Facebook" }
];