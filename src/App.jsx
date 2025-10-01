import { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";

/* ========= DATA: kết hợp từ CV + GitHub ========= */
const me = {
  name: "Phạm Đức Long",
  role: "Intern Java Developer • Full-stack Developer",
  location: "Bát Khối, Long Biên, Hà Nội",
  avatar: "https://github.com/dnclou6.png",
  bio: "Sinh viên năm 2 chuyên ngành Software Development tại FPT Polytechnic (GPA 3.8/4.0). Đang tìm kiếm cơ hội thực tập Java Backend để áp dụng kiến thức Spring Boot vào hệ thống thực tế. Mục tiêu dài hạn trở thành Senior Backend Developer với kỹ năng thiết kế hệ thống vững chắc.",
  shortBio: "Passionate Java Developer với kinh nghiệm Full-stack, đang tìm kiếm cơ hội thực tập để phát triển sự nghiệp.",
  links: [
    { label: "GitHub", href: "https://github.com/dnclou6", icon: "🔗" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dnclou6", icon: "💼" },
    { label: "Email", href: "mailto:duclong0910@gmail.com", icon: "📧" }
  ],
  badges: [
    "Java Core", "Spring Boot", "Spring Security", "Spring JPA", "Spring MVC",
    "React • Vue.js", "HTML5 • CSS3 • JavaScript", "Thymeleaf", "Bootstrap",
    "SQL Server • MySQL", "Postman", "Git • GitHub", "IntelliJ • VS Code"
  ],
  spotlight: [
    {
      name: "Article Management Website",
      ksp: "Quản lý bài đăng trường học + phân công nhiệm vụ",
      desc: [
        "Xây dựng website quản lý bài đăng trường học sử dụng ReactJS, Spring Boot và SQL Server.",
        "Quản lý bài viết, chủ đề, đăng ký theo học kỳ, phân công công việc cho nhân viên.",
        "Frontend: ReactJS, JavaScript, Tailwind • Backend: Spring Boot, Security, JPA • Database: SQL Server."
      ],
      tags: ["React", "Spring Boot", "Spring Security", "SQL Server", "JavaScript"],
      repo: "https://github.com/dnclou6/Article-Management",
      impact: ["Quản lý bài viết hiệu quả", "Phân quyền rõ ràng", "Lưu trữ và tìm kiếm dễ dàng"],
      image: "https://via.placeholder.com/400x250/0ea5a4/ffffff?text=Article+Management",
      featured: true
    },
    {
      name: "Clothing Store Manager",
      ksp: "Quản lý cửa hàng thời trang + AI Chatbot",
      desc: [
        "Phát triển website quản lý cửa hàng thời trang với JavaScript, Thymeleaf, Spring Boot và SQL Server.",
        "Quản lý sản phẩm, đơn hàng, khách hàng, mã giảm giá, vai trò người dùng và báo cáo bán hàng.",
        "Tích hợp AI Chatbot hỗ trợ khách hàng tìm kiếm và lựa chọn sản phẩm."
      ],
      tags: ["Spring Boot", "Thymeleaf", "JavaScript", "SQL Server", "AI Integration"],
      repo: "https://github.com/dnclou6/Clothing-Manager",
      impact: ["Quy trình bán hàng mượt mà", "Kiểm soát tồn kho thông minh", "Báo cáo chi tiết"],
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Clothing+Store",
      featured: true
    },
    {
      name: "SOF308-xuong (Vue.js)",
      ksp: "Luyện tập Vue.js components & state management",
      desc: [
        "Dự án học tập Vue.js với focus vào component architecture và state management.",
        "Tổ chức thư mục 'product/', chuẩn hoá component structure và lifecycle methods."
      ],
      tags: ["Vue.js", "JavaScript", "Component Architecture"],
      repo: "https://github.com/dnclou6/SOF308-xuong",
      impact: ["Hiểu rõ Vue.js ecosystem", "Cấu trúc code rõ ràng", "Tăng tốc development"],
      image: "https://via.placeholder.com/400x250/16a34a/ffffff?text=Vue.js+Project",
      featured: false
    }
  ],
  skills: {
    Backend: [
      { name: "Java Core", level: 85, color: "#f59e0b" },
      { name: "Spring Boot", level: 75, color: "#10b981" },
      { name: "Spring Data JPA", level: 70, color: "#3b82f6" },
      { name: "Spring Security", level: 65, color: "#ef4444" },
      { name: "Spring MVC", level: 68, color: "#8b5cf6" }
    ],
    Frontend: [
      { name: "HTML5/CSS3/JS", level: 80, color: "#f97316" },
      { name: "React", level: 70, color: "#06b6d4" },
      { name: "Vue.js", level: 65, color: "#10b981" },
      { name: "Thymeleaf", level: 60, color: "#6366f1" },
      { name: "Bootstrap", level: 75, color: "#8b5cf6" }
    ],
    "Database & Tools": [
      { name: "SQL Server", level: 70, color: "#dc2626" },
      { name: "MySQL", level: 65, color: "#ea580c" },
      { name: "Postman", level: 75, color: "#f59e0b" },
      { name: "Git/GitHub", level: 80, color: "#374151" },
      { name: "IntelliJ/VS Code", level: 85, color: "#7c3aed" }
    ]
  },
  timeline: [
    {
      title: "Article Management Website",
      role: "Full-stack Developer",
      time: "09/2024 – 11/2024",
      points: [
        "Xây dựng website quản lý bài đăng trường học với ReactJS và Spring Boot.",
        "Tính năng: Quản lý bài viết, chủ đề, đăng ký theo học kỳ, phân công nhiệm vụ.",
        "Stack: ReactJS • JavaScript • Tailwind • Spring Boot • Security • JPA • SQL Server."
      ],
      link: "https://github.com/dnclou6/Article-Management",
      icon: "📝"
    },
    {
      title: "Clothing Store Manager",
      role: "Backend Developer",
      time: "02/2025 – 05/2025",
      points: [
        "Phát triển hệ thống quản lý cửa hàng thời trang với tích hợp AI Chatbot.",
        "Tính năng: Quản lý sản phẩm, đơn hàng, khách hàng, tồn kho, báo cáo bán hàng.",
        "Stack: JavaScript • Thymeleaf • Bootstrap • Spring Boot • Security • JPA • SQL Server."
      ],
      link: "https://github.com/dnclou6/Clothing-Manager",
      icon: "👕"
    }
  ],
  education: {
    school: "FPT Polytechnic College",
    major: "Software Development",
    gpa: "GPA 3.8/4.0",
    years: "2023 – 2025",
    status: "Sinh viên năm 2"
  },
  projects: [
    { name: "SOF3022-Java-5-ASM", desc: "Dự án Java OOP với xử lý luồng, cấu trúc dự án và script database", tags: ["Java", "OOP", "SQL"], repo: "https://github.com/dnclou6/SOF3022-Java-5-ASM" },
    { name: "TH01286", desc: "Bài tập Java tổng hợp sử dụng Maven build tool", tags: ["Java", "Maven"], repo: "https://github.com/dnclou6/TH01286" },
    { name: "duan-xuong", desc: "Mô hình hoá dữ liệu và nghiệp vụ trong Java", tags: ["Java", "Data Modeling"], repo: "https://github.com/dnclou6/duan-xuong" },
    { name: "Bai_Test", desc: "Dự án HTML/CSS với responsive design", tags: ["HTML", "CSS", "Responsive"], repo: "https://github.com/dnclou6/Bai_Test" }
  ],
  contactEmail: "duclong0910@gmail.com",
  achievements: [
    { title: "GPA 3.8/4.0", desc: "Thành tích học tập xuất sắc", icon: "🏆" },
    { title: "4+ Projects", desc: "Dự án thực tế hoàn thành", icon: "💻" },
    { title: "Full-stack", desc: "Kinh nghiệm toàn diện", icon: "⚡" },
    { title: "AI Integration", desc: "Tích hợp AI trong dự án", icon: "🤖" }
  ]
};

/* ========= Dark Mode Hook ========= */
function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return [isDark, setIsDark];
}

/* ========= Typing Effect Hook ========= */
function useTypingEffect(text, speed = 100) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
}


/* ========= Animated Counter Hook ========= */
function useAnimatedCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return [count, setIsVisible];
}

/* ========= Skill Bar Component ========= */
function SkillBar({ skill, isVisible }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className={`skill-item ${isVisible ? 'animate-in' : ''}`}>
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ 
            width: `${width}%`, 
            backgroundColor: skill.color,
            boxShadow: `0 0 20px ${skill.color}40`
          }}
        />
      </div>
    </div>
  );
}

/* ========= Project Card Component ========= */
function ProjectCard({ project, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`project-card ${isVisible ? 'animate-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        <img src={project.image} alt={project.name} />
        <div className="project-overlay">
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
            <span>View Project</span>
            <span>→</span>
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p className="project-ksp">{project.ksp}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========= Achievement Card Component ========= */
function AchievementCard({ achievement, index, isVisible }) {
  return (
    <div 
      className={`achievement-card ${isVisible ? 'animate-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="achievement-icon">{achievement.icon}</div>
      <h3>{achievement.title}</h3>
      <p>{achievement.desc}</p>
    </div>
  );
}

/* ========= Main App Component ========= */
export default function App() {
  const [isDark, setIsDark] = useDarkMode();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set(['home']));
  
  const typingText = useTypingEffect(me.shortBio, 50);

  // Debug: Log data to console
  console.log('Skills data:', me.skills);
  console.log('Projects data:', me.spotlight);
  console.log('Visible sections:', visibleSections);

  // Simple visibility tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience'];
      const newVisibleSections = new Set(['home']);
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            newVisibleSections.add(sectionId);
          }
        }
      });
      
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Liên hệ từ portfolio: ${formData.name}`);
    const body = encodeURIComponent(`Tên: ${formData.name}\nEmail: ${formData.email}\nNội dung:\n${formData.message}`);
    window.location.href = `mailto:${me.contactEmail}?subject=${subject}&body=${body}`;
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={me.avatar} alt="Logo" />
            <span>{me.name}</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {sections.map(section => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section === 'home' ? '🏠 Home' :
                 section === 'about' ? '👨‍💻 About' :
                 section === 'skills' ? '⚡ Skills' :
                 section === 'projects' ? '💻 Projects' :
                 section === 'experience' ? '📈 Experience' :
                 '📧 Contact'}
              </button>
            ))}
          </div>

          <div className="nav-controls">
            <button 
              className="theme-toggle"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle dark mode"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="particles"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Xin chào! Tôi là</span>
              <span className="name">{me.name}</span>
              <span className="role">{me.role}</span>
            </h1>
            <p className="hero-description">
              {typingText}
              <span className="cursor">|</span>
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Xem dự án của tôi
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Liên hệ ngay
              </button>
            </div>
            <div className="hero-links">
              {me.links.map(link => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hero-link"
                >
                  <span className="hero-link-icon">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={me.avatar} alt={me.name} />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>Về tôi</h2>
            <p>Một chút thông tin về bản thân và mục tiêu nghề nghiệp</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>{me.bio}</p>
              <div className="about-stats">
                  {me.achievements.map((achievement, index) => (
                    <AchievementCard 
                      key={index} 
                      achievement={achievement} 
                      index={index}
                      isVisible={visibleSections.has('about')}
                    />
                  ))}
              </div>
            </div>
            <div className="about-education">
              <div className="education-card">
                <h3>🎓 Học vấn</h3>
                <div className="education-info">
                  <h4>{me.education.school}</h4>
                  <p className="education-major">{me.education.major}</p>
                  <p className="education-years">{me.education.years} • {me.education.status}</p>
                  <p className="education-gpa">{me.education.gpa}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2>Kỹ năng</h2>
            <p>Những công nghệ và công cụ tôi sử dụng</p>
          </div>
          <div className="skills-content">
            {Object.entries(me.skills).map(([category, skills]) => (
              <div key={category} className="skills-category">
                <h3>{category}</h3>
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      isVisible={visibleSections.has('skills')}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Dự án nổi bật</h2>
            <p>Những dự án tôi đã thực hiện và tự hào</p>
          </div>
          <div className="projects-grid">
            {me.spotlight.map((project, index) => (
              <ProjectCard 
                key={project.name} 
                project={project} 
                index={index}
                isVisible={visibleSections.has('projects')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2>Kinh nghiệm</h2>
            <p>Hành trình phát triển và học hỏi của tôi</p>
          </div>
          <div className="timeline">
            {me.timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-icon">{item.icon}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p className="timeline-time">{item.time}</p>
                  <ul className="timeline-points">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="timeline-link">
                    Xem dự án →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Liên hệ</h2>
            <p>Hãy kết nối với tôi để thảo luận về cơ hội hợp tác</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Thông tin liên hệ</h3>
              <div className="contact-items">
                {me.links.map(link => (
                  <a key={link.label} href={link.href} className="contact-item">
                    <span className="contact-icon">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Nội dung tin nhắn"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`btn btn-primary ${isFormSubmitted ? 'submitted' : ''}`}
              >
                {isFormSubmitted ? '✓ Đã gửi!' : 'Gửi tin nhắn'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {me.name}. Made with ❤️ and React.</p>
        </div>
      </footer>
    </div>
  );
}