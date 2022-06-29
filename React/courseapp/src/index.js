import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BootstrapTest from './BootstrapTest';

import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components';
import {Button} from './App';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
    <BigButton as="a">+++</BigButton>
    <BootstrapTest/>
  </StrictMode>
);