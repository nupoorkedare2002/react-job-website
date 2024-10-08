import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobssPage, { jobLoader } from './pages/JobssPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
  };

  // Delete Job 
  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
  };

  // Update , Edit  Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route 
          path='/jobs/:id' 
          element={<JobssPage deleteJob={deleteJob} />} 
          loader={jobLoader} 
        />

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
};

export default App;
