import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeProvider/ThemeProvider';
import { routes } from './Routes/Routes/Routes';

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div data-theme={theme} className='min-h-screen'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
