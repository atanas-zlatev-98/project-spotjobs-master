import Home from './Home';
import UpToDate from './UpToDate';
import SearchJobs from './SearchJobs';
import SendResume from './SendResume';
import SearchCompany from './SearchCompany';
import CreateApplication from './CreateApplication';
import FindCandidate from './FindCandidate';
import Resumes from './Resumes';
import Contacts from './Contacts';
import Profile from './Profile';
import JobPage from './JobPage';
import CompanyPage from './CompanyPage';

const routes = [
    {
      path: '/',
      component: <Home/>,
      exact: true,
    },
    {
      path: '/up-to-date',
      component: <UpToDate/>,
    },
    {
      path: '/search-jobs',
      component: <SearchJobs/>
    },
    {
      path: '/send-resume',
      component: <SendResume/>
    },
    {
      path: '/search-company',
      component: <SearchCompany/>
    },
    {
      path: '/create-application',
      component: <CreateApplication/>
    },
    {
      path: '/find-candidate',
      component: <FindCandidate/>
    },
    {
      path: '/resumes',
      component: <Resumes/>
    },
    {
      path: '/contacts',
      component: <Contacts/>
    },
    {
      path: '/profile',
      component: <Profile/>
    },
    {
      path: '/job-page',
      component: <JobPage/>
    },
    {
      path: '/company-page',
      component:<CompanyPage/>
    }
]

  export default routes;