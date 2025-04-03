import './App.css';
import Badge from './components/Badge';
import Header from './components/Header';

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <h1>
            Hi, I'm Nicolas Tosoroni <Badge text="Web Developer" />
          </h1>
          <h2>
            I'm a front-end developer with a passion for creating beautiful and
            functional web applications.
          </h2>
        </main>
      </div>
    </>
  );
}

export default App;
