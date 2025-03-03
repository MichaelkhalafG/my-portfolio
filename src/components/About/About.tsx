import { Container } from "./styles";
import michael from "../../assets/michael.jpg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hi there! I'm Michael, a passionate Front-End Developer with over 4 years of experience specializing in React.js. 
            With a strong foundation in Computer Science and Artificial Intelligence.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200}>
          <h3>Technical Skills:</h3>
          <ul>
            <li style={{marginBottom:"2px"}}><strong>Frontend Technologies:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, React Query</li>
            <li  style={{marginBottom:"2px"}}><strong>State Management:</strong> Context API</li>
            <li  style={{marginBottom:"2px"}}><strong>Performance Optimization:</strong> Core Web Vitals, SSR, SSG, Lazy Loading, Image Optimization</li>
            <li  style={{marginBottom:"2px"}}><strong>API & Backend Interaction:</strong> RESTful APIs, Firebase</li>
            <li  style={{marginBottom:"2px"}}><strong>Version Control & Build Tools:</strong> Git, Webpack, Vite, Parcel</li>
            <li  style={{marginBottom:"2px"}}><strong>Styling & UI Development:</strong> Tailwind CSS, Bootstrap, Material UI, SASS/SCSS, Styled Components</li>
            <li  style={{marginBottom:"2px"}}><strong>Testing & Debugging:</strong> Jest, React Testing Library, Cypress, Playwright</li>
            <li  style={{marginBottom:"2px"}}><strong>Responsive & Mobile-First Development:</strong> PWA, Cross-Browser Compatibility</li>
            <li  style={{marginBottom:"2px"}}><strong>Development Best Practices:</strong> Agile, Scrum, Accessibility (WCAG, ARIA)</li>
          </ul>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <h3>Soft Skills:</h3>
          <ul>
            <li  style={{marginBottom:"2px"}}>Strong Problem-Solving & Debugging Skills</li>
            <li  style={{marginBottom:"2px"}}>Effective Communication & Team Collaboration</li>
            <li  style={{marginBottom:"2px"}}>Ability to Adapt to New Technologies Quickly</li>
          </ul>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <p  style={{marginTop:"5px"}}>
            <strong>Open to new opportunities! If you're looking for a front-end developer or need a freelancer for your next project, feel free to reach out.</strong>
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={500}>
          <h3>My Main Skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={130}><img src={reactIcon} alt="React" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={190}><img src={jsIcon} alt="JavaScript" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={160}><img src={nodeIcon} alt="Node.js" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={170}><img src={htmlIcon} alt="HTML" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={180}><img src={cssIcon} alt="CSS" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={190}><img src={boostrapIcon} alt="Bootstrap" /></ScrollAnimation></div>
          <div className="hability"><ScrollAnimation animateIn="fadeInUp" delay={140}><img src={typescriptIcon} alt="TypeScript" /></ScrollAnimation></div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={200}>
          <img src={michael} alt="Michael Khalaf" style={{ borderRadius: "5%" }} />
        </ScrollAnimation>
      </div>
    </Container>
  );
}