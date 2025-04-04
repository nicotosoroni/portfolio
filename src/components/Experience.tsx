import ExperienceItem from './ExperienceItem';

const EXPERIENCE_DATA = [
  {
    time: 'Jul 2024 - Dic 2024',
    title: 'Semi Senior Frontend Developer at intive',
    description:
      'Member of a web application maintenance team, detecting and correcting problems, failures and bugs. Working closely with the client and other teams to provide quick response and solutions. React | Redux | CSS Modules | SASS | Jest | React-Testing-Library | Jira | Bitbucket',
  },
  {
    time: 'Oct 2023 - Jul 2024',
    title: 'Semi Senior Frontend Developer at intive',
    description:
      'Creation of a cross-organizational design system for standardizing design across multiple brands and teams. TS | React | CSS Modules | Storybook | Jest | React-Testing-Library | WCAG | Github',
  },
  {
    time: 'Jan 2021 -  Oct 2023',
    title: 'Semi Senior Frontend Developer at intive',
    description:
      'Build and maintenance of a micro-frontend architecture for the back office of Cencosud. Management and support of a host with multiple remotes. As a semi-senior, I had responsibilities such as creating more complex components, assisting teams that depended on the microfrontend, fixing production bugs, onboarding new team members, and participating in product decisions with the client. TS | React | Styled components | Webpack | Module federation | i18n | Axios | Jest | React-Testing-Library | Striker | Postman | CI/CD | GitLab',
  },
  {
    time: 'May 2021 -  Dec 2022',
    title: 'Junior Front End Developer',
    description:
      'Build and maintenance of a micro-frontend architecture for the back office of Cencosud. Management and support of a host with multiple remotes. As a junior position, I performed tasks such as design changes and maintenance, documentation updates, creation of simple components, and comprehensive unit test coverage. TS | React | Styled components | Webpack | Module federation | i18n | Axios | Jest | React-Testing-Library | Striker | Postman | CI/CD | GitLab',
  },
  {
    time: 'Nov 2021 - Feb 2023',
    title: 'Student Tutor at Coderhouse',
    description:
      'The responsibilities of the role included helping students resolve doubts, providing feedback on their projects, grading practical assignments, and teaching supplementary classes. Javascript | React.Js ',
  },
];

const Experience = () => {
  return (
    <ol className="relative border-s border-gray-200 ml-3">
      {EXPERIENCE_DATA.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <ExperienceItem {...item} />
        </li>
      ))}
    </ol>
  );
};
export default Experience;
