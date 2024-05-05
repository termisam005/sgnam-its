import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/template/Login';
import Main from './pages/template/Main';
import Error from './pages/template/Error';
import Signal from './pages/template/Signal';
import Record from './pages/template/Record';
import Users from './pages/template/Users';

import AccordionList from './pages/comp/AccordionList';
import Button from './pages/comp/Button';
import Cards from './pages/comp/Cards';
import Cardpattern from './pages/comp/Cardpattern';
import Control from './pages/comp/Control';
import Label from './pages/comp/Label';
import Input from './pages/comp/Input';
import InputField from './pages/comp/InputField';
import Map from './pages/comp/Map';
import Navigation from './pages/comp/Navigation';
import Popover from './pages/comp/Popover';
import Tooltip from './pages/comp/Tooltip';
import Popup from './pages/comp/Popup';
import Progress from './pages/comp/Progress';
import Selector from './pages/comp/Selector';
import TabnToggle from './pages/comp/TabnToggle';
import Tables from './pages/comp/Tables';
import Tree from './pages/comp/Tree';
import Upload from './pages/comp/Upload';
import Chart from './pages/comp/Chart';

import TestMain01 from './pages/template/TestMain01';
import TestMain02 from './pages/template/TestMain02';
import TestMain03 from './pages/template/TestMain03';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/main'} element={<Main />} />
          <Route path={'/error'} element={<Error />} />
          <Route path={'/signal'} element={<Signal />} />
          <Route path={'/record'} element={<Record />} />
          <Route path={'/users'} element={<Users />} />
          <Route path={'/accordionlist'} element={<AccordionList />} />
          <Route path={'/button'} element={<Button />} />
          <Route path={'/cards'} element={<Cards />} />
          <Route path={'/cardpattern'} element={<Cardpattern />} />
          <Route path={'/control'} element={<Control />} />
          <Route path={'/input'} element={<Input />} />
          <Route path={'/inputfield'} element={<InputField />} />
          <Route path={'/label'} element={<Label />} />
          <Route path={'/map'} element={<Map />} />
          <Route path={'/navigation'} element={<Navigation />} />
          <Route path={'/popover'} element={<Popover />} />
          <Route path={'/tooltip'} element={<Tooltip />} />
          <Route path={'/popup'} element={<Popup />} />
          <Route path={'/Progress'} element={<Progress />} />
          <Route path={'/selector'} element={<Selector />} />
          <Route path={'/tabntoggle'} element={<TabnToggle />} />
          <Route path={'/tables'} element={<Tables />} />
          <Route path={'/tree'} element={<Tree />} />
          <Route path={'/upload'} element={<Upload />} />
          <Route path={'/chart'} element={<Chart />} />
          <Route path={'/testmain01'} element={<TestMain01 />} />
          <Route path={'/testmain02'} element={<TestMain02 />} />
          <Route path={'/testmain03'} element={<TestMain03 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;