import { useTheme } from '../ThemeContext';
import Header from './Header'

const Page = () => {
  const { theme } = useTheme();

  return (
    <div id="app" className={theme ? 'light' : 'dark'}>
      <Header/>
      <article>
        <h2>React Course</h2>
        <p>A course that is about React.</p>
      </article>
    </div>
  );
};

export default Page;
