import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.watchizereg.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Watchizer</h3>
              <p>
              A fully functional and feature-rich e-commerce platform designed for selling premium watches, leather wallets, and 
              bags from renowned international brands. The website offers a seamless shopping experience with a modern, 
              responsive design, intuitive navigation, and secure payment integration. Optimized for performance, accessibility, 
              and SEO, ensuring a smooth user experience across all devices. 
              </p>
            </div>
            {/* <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Bootstrap</li>
                <li>HTML 5</li>
                <li>CSS</li>
                <li>API's</li>
              </ul>
            </footer> */}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://hephzibaheg.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Hephzibah</h3>
              <p>
              A comprehensive e-commerce platform for renting occasion dresses, designed to simplify the dress selection 
              process. The website allows users to input their measurements for personalized recommendations and showcases a 
              wide range of rentable dresses. It features a seamless booking system, an intuitive user interface, and direct 
              communication with the support team for assistance. Optimized for performance, accessibility, and mobile 
              responsiveness to ensure a smooth and engaging user experience
              </p>
            </div>
            {/* <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Bootstrap</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>API's</li>
                <li>Python</li>
                <li>DeepLearning</li>
              </ul>
            </footer> */}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.eyekemet.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Eye kemet</h3>
              <p>
              A website showcasing unique products made from eye iris images, including chains, bracelets, earrings, and various 
              other accessories. The platform is designed to provide a smooth and engaging browsing experience, featuring 
              detailed product displays and company information. It boasts a responsive design across all devices and optimized 
              performance for a fast and seamless user experience.
              </p>
            </div>
            {/* <footer>
              <ul className="tech-list">
                <li>Bootstrap</li>
                <li>HTML 5</li>
                <li>CSS</li>
                <li>Java Script</li>
              </ul>
            </footer> */}
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/MichaelkhalafG/ssam" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SSAM</h3>
              <p>
              A web platform for segmenting objects in satellite images using a custom deep learning model developed as part of 
              our graduation project. I was responsible for developing the entire website including both the front-end and back
              end, as well as creating the API that facilitated communication with the model. Additionally, I actively contributed to 
              the development and training of the deep learning model itself. 
              </p>
            </div>
            {/* <footer>
              <ul className="tech-list">
                <li>Bootstrap</li>
                <li>HTML 5</li>
                <li>CSS</li>
                <li>Java Script</li>
              </ul>
            </footer> */}
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
              This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
              VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
              This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>              
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
       

      </div>
    </Container>
  );
}