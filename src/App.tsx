import './App.css';
import Badge from './components/Badge';
import Header from './components/Header';
import SocialPill from './components/SocialPill';
import GitHubIcon from './icons/GitHub';
import LinkedInIcon from './icons/LinkedIn';

function App() {
  return (
    <>
      <body>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          {' '}
        </div>
        <Header />
        <main>
          <section className="w-full lg:w-[740px] mx-auto py-44">
            <img
              className="rounded-full w-12 h-12 mb-4"
              // src="https://i.ibb.co/k6z2SSRp/profile-Photo.jpg"
              src="https://media.licdn.com/dms/image/v2/C4D03AQHZTm6h_Ygohg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1650637233618?e=1749081600&v=beta&t=hpyhEFWsW_3-LFjWG0nH5m5hXflhr-UAL4iY9Xp3wQg"
              alt="nico tosoroni photo"
            />
            <h1 className="text-white text-5xl font-bold flex flex-row gap-x-4 pb-4">
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
            <h2 className="text-2xl opacity-80 text-wrap">
              I'm a{' '}
              <span className="text-orange-300/90">
                front-end developer with 4 years of experience
              </span>{' '}
              in building web applications using React, JS, and modern CSS.
              <br />
              <span className="opacity-80">
                I love on creating intuitive and visually appealing user
                interfaces.
              </span>
            </h2>
            <nav className="flex gap-x-2 mt-8">
              <SocialPill href="https://www.linkedin.com/in/nicolas-tosoroni/">
                <LinkedInIcon styles="w-6 h-6" /> LinkedIn
              </SocialPill>
              <SocialPill href="https://github.com/nicotosoroni/">
                <GitHubIcon styles="w-6 h-6" /> GitHub
              </SocialPill>
            </nav>
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
