import { useNavigate } from 'react-router';
import { exerciseData } from './Excercises/Exercises';

const Training = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-800">
      <h1 className="text-4xl text-red font-bold text-amber-300 mb-4">
        Training Page
      </h1>
      <p className="text-lg text-amber-100">This is the training page.</p>
      <div className="mt-8">
        {exerciseData.map((topic) => (
          <section
            key={topic.topic}
            className="bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-900 mb-4"
          >
            <h2 className="bg-teal-800 text-white text-xl font-semibold px-6 py-4">
              {topic.topic}
            </h2>
            <div className="p-6 space-y-8">
              {Object.entries(topic.difficulties).map(
                ([difficulty, exercises]) => (
                  <div key={difficulty} className="space-y-3">
                    <h3
                      className={`font-semibold text-lg ${
                        difficulty === 'Easy'
                          ? 'text-green-600'
                          : difficulty === 'Medium'
                          ? 'text-yellow-600'
                          : difficulty === 'Hard'
                          ? 'text-orange-600'
                          : 'text-red-600'
                      }`}
                    >
                      {difficulty}
                    </h3>
                    <ul className="space-y-2 ml-4 list-disc list-inside">
                      {exercises.map((ex, index) => (
                        <li key={index} className="text-gray-200">
                          <span className="font-medium">{ex.title}</span>
                          {`${ex.title === '' ? '' : ':'}`} {ex.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </section>
        ))}
      </div>
      <b>1. Build Real Projects</b> Clone popular websites (Airbnb, Netflix,
      Amazon) components. Build your own portfolio website with a blog and
      projects showcase.
      <br />
      <b>2. Learn Dev Tools</b> Master browser DevTools: debugging, inspecting
      network, profiling performance. Learn Chrome Lighthouse for performance
      and accessibility audits.
      <br />
      <b>3. Code Challenges Platforms</b> LeetCode Frontend Mentor Codewars
      HackerRank freeCodeCamp
      <br />
      <b>4. Study Design Systems</b> Learn how companies like Airbnb or Shopify
      manage components. Try building your own component library with Storybook.
      <br />
      <b>5. Version Control</b> Practice Git workflows (merge, rebase,
      branches). Host your code on GitHub and write meaningful commit messages.
      <br />
      <b>6. Collaborate</b> Contribute to open-source projects. Pair programming
      with other developers or study groups.
      <br />
      <b>7. Stay Updated</b> Follow blogs like CSS-Tricks, Smashing Magazine,
      React Blog. Subscribe to newsletters like Frontend Focus, React Status,
      etc.
      <br />
      <b>8. Write Clean Code</b> Read Robert C. Martin’s Clean Code . Refactor
      old code and practice readability over cleverness.
      <button
        onClick={goToHome}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Go to home page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </button>
    </div>
  );
};
export default Training;
