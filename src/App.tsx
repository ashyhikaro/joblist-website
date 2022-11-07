import JobsList from './components/JobsList';
import JobDetailsPage  from './components/jobDetailsPage';
import { useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: React.FunctionComponent = () => {
  const [currentJob, setCurrentJob] = useState({})

  return (
    <BrowserRouter>
      <Suspense fallback={<h1 className='loading_title'>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<JobsList setCurrentJob={setCurrentJob}/>} />
          <Route path="detailed" element={<JobDetailsPage currentJob={currentJob}/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;