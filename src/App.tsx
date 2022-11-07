import JobsList from './components/JobsList';
import JobDetailsPage  from './components/jobDetailsPage';
import { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'

const App: React.FunctionComponent = () => {
  const [currentJob, setCurrentJob] = useState({})

  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<JobsList setCurrentJob={setCurrentJob}/>} />
          <Route path="detailed" element={<JobDetailsPage currentJob={currentJob}/>} />
        </Routes>
    </HashRouter>
  );
}

export default App;