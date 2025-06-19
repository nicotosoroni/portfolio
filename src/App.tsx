import Badge from './components/Badge';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionContainer from './components/SectionContainer';
import SocialPill from './components/SocialPill';
import { useKeyboardShortcut } from './customHooks/useKeyboardShortcut';
import GitHubIcon from './icons/GitHub';
import LinkedInIcon from './icons/LinkedIn';
import MailIcon from './icons/Mail';
import PersonIcon from './icons/Person';
import SuitcaseIcon from './icons/Suitcase';

function App() {
  useKeyboardShortcut({
    keyCombination: ['n', 'f', 't'],
    targetPath: '/training',
  });

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        {' '}
      </div>
      <Header />
      <main className="px-4">
        <SectionContainer styles="py-44 pb-22">
          <img
            className="rounded-full size-20 mb-4"
            src="https://media.licdn.com/dms/image/v2/C4D03AQHZTm6h_Ygohg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1650637233618?e=1755734400&v=beta&t=mCZuf7ajE9rNHxltznLRTG7viTtaIHJKc5iYYeMIl-0"
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
            <SocialPill href="mailto:nicolastosoroni@outlook.com?subject=Inquiry">
              <MailIcon styles="size-4 md:size-6" /> nicolastosoroni@outlook.com
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
        <SectionContainer id="about-me" styles="pt-22 pb-22">
          <h2 className="text-2xl font-semibold mb-6 flex gap-x-3 items-center">
            <PersonIcon styles="size-7" />
            About me
          </h2>

          <span className="text-orange-200/90">
            With almost 4 years of experience working as front-end developer, I
            am at the point in my career where I am looking to improve
            professionally.
            <br />
            <br /> I like to generate pleasant working environments. I am
            looking for a new challenge to take a step forward in my career as a
            software developer.
          </span>
        </SectionContainer>
        <SectionContainer id="contact" styles="pt-12 pb-22">
          <h2 className="text-2xl font-semibold mb-6 flex gap-x-3 items-center">
            <MailIcon styles="size-7" />
            Contact me
          </h2>

          <span className="text-orange-200/90">
            nicolastosoroni@outlook.com
          </span>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}

export default App;
