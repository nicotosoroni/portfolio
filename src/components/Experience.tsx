import ExperienceItem from './ExperienceItem';

const EXPERIENCE_DATA = [
  {
    time: 'February 2022',
    title: 'Marketing UI design in Figma',
    description:
      'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
    link: 'https://www.figma.com/community/file/1111111111111',
  },
  {
    time: 'March 2022',
    title: 'Marketing UI design in Figma',
    description:
      'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
  },
  {
    time: 'April 2022',
    title: 'E-Commerce UI code in Tailwind CSS',
    description:
      'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
  },
];

const Experience = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {EXPERIENCE_DATA.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <ExperienceItem {...item} />
        </li>
      ))}
    </ol>
  );
};
export default Experience;
