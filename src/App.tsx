import './App.css';
import Badge from './components/Badge';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionContainer from './components/SectionContainer';
import SocialPill from './components/SocialPill';
import GitHubIcon from './icons/GitHub';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';
import SuitcaseIcon from './icons/Suitcase';

function App() {
  return (
    <>
      <body>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          {' '}
        </div>
        <Header />
        <main className="px-4">
          <SectionContainer styles="py-44 pb-22">
            <img
              className="rounded-full size-12 mb-4"
              src="https://media.licdn.com/dms/image/v2/C4D03AQHZTm6h_Ygohg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1650637233618?e=1749081600&v=beta&t=hpyhEFWsW_3-LFjWG0nH5m5hXflhr-UAL4iY9Xp3wQg"
              alt="nico tosoroni photo"
            />
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
              Hi, I'm Nicolas Tosoroni
              <a
                href="https://www.linkedin.com/in/nicolas-tosoroni/"
                target="_blank"
                rel="noopener"
                className="flex justify-center items-center"
              >
                <Badge text="Open to work" />
              </a>
            </h1>
            <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px]">
              I'm a{' '}
              <span className="text-orange-200/90">
                front-end developer with 4 years of experience
              </span>{' '}
              in building web applications using React, JS, and modern CSS.
              <br />
              <span className="opacity-80">
                I love on creating intuitive and visually appealing user
                interfaces.
              </span>
            </h2>
            <nav className="flex gap-4 mt-8 flex-wrap">
              <SocialPill href="https://www.linkedin.com/in/nicolas-tosoroni/">
                <LinkedInIcon styles="size-4 md:size-6" /> LinkedIn
              </SocialPill>
              <SocialPill href="https://github.com/nicotosoroni/">
                <GitHubIcon styles="size-4 md:size-6" /> GitHub
              </SocialPill>
              <SocialPill href="https://github.com/nicotosoroni/">
                <MailIcon styles="size-4 md:size-6" />{' '}
                nicolastosoroni@outlook.com
              </SocialPill>
            </nav>
          </SectionContainer>
          <SectionContainer id="experience">
            <h2 className="text-2xl font-semibold mb-6 flex gap-x-3 items-center">
              <SuitcaseIcon styles="size-7" />
              Experience
            </h2>
            <Experience />
          </SectionContainer>
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App;
