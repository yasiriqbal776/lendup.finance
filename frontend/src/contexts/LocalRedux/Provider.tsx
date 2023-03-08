import { createContext } from 'react';
import { Provider } from 'react-redux';

export const LocalContext = createContext(null);

const context = ({ children, store }: { children: any; store: any }) => {
  return (
    <Provider store={store} context={LocalContext}>
      {children}
    </Provider>
  );
};
export default context;
