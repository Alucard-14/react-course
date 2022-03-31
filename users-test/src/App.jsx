import './App.css';
import Card from './components/UI/Card';

import AddUser from './components/Users/AddUser';

function App() {
  return (
    <div className='flex min-h-screen min-w-full bg-[#1f1f1f] justify-center'>
      <div className='container'>
        <Card className='my-8 mx-auto p-4 w-[90%] max-w-[40rem]'>
          <AddUser />
        </Card>
      </div>
    </div>
  );
}

export default App;
