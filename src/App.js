import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import { ThemeProvider } from './context/ThemeContext.js';
import { Fragment, Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('./screens/Dashboard.js'))
const PageNotFoundScreen = lazy(() => import('./screens/PageNotFoundScreen.js'))
const CourseDetails = lazy(() => import('./screens/CourseDetails.js'))
const Layout = lazy(() => import('./Layout/Layout.js'))
const MyLearning = lazy(() => import('./screens/MyLearning.js'))
const LearningHistory = lazy(() => import('./screens/LearningHistory.js'))
const Profile = lazy(() => import('./screens/Profile.js'))

function App() {

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className='d-flex justify-content-center align-items-center vh-100'>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="/myLearning" element={<MyLearning />} />
                <Route path="/learningHistory" element={<LearningHistory />} />
                <Route path="/myLearning" element={<MyLearning />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<PageNotFoundScreen />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
