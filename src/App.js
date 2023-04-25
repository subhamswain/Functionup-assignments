import React from 'react';
import ProfileCard from './components/profile';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <ProfileCard
        name="Jeff Bezos"
        designation="Software Engineer"
        jobDescription="html,css,javascript,python,django"
        image="https://www.toptal.com/developers/img-resize/view/c04628f83b0564eb8b1905603283651b.png "
      />
      <ProfileCard
        name="Tim Cook"
        designation="Product Manager"
        jobDescription="aws,azure,frontend and backend"
        image="https://www.toptal.com/developers/img-resize/view/58ce56f27ef6d975e772773d1b84156e.jpg"
      />
      <ProfileCard
        name="Chris Coyier"
        designation="UX Designer"
        jobDescription="flamingo rat ,agile method,html,css,javascript"
        image="https://www.toptal.com/developers/img-resize/view/858b67915f6237fbba70b60bd198a822.jpg"
      />
    </div>
  );
};

export default App;
