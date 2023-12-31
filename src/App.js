import './App.css';
import { Navbar } from './components';
import { Routes, Route } from "react-router-dom";
import { HomePage, ContactPage, CommunityPage, ResourcePage, SignINUPPage, JoinUsPage } from './Pages';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/resource" element={<ResourcePage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/community" element={<CommunityPage />} />
          <Route path='sign-in-up' element={<SignINUPPage />} />
          <Route path='join-us' element={<JoinUsPage />} />
          </Routes>
         
    </div>
  );
}

export default App;
