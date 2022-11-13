import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes';
import Main from './layout/Main';

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
    </div>
  );
}

export default App;
