import * as ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';
import { theme } from './themes/Themes';
import NavBar from './components/navbar/index';
import { Storage } from './reducer/Storage';
import Auth from './components/auth/Auth';
import Footer from './components/Footer'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={Storage}>
      <ChakraProvider theme={theme}>
        <Auth>
          <NavBar />
          <App />
          <Footer />
        </Auth>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
