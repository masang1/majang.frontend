import { QueryClient, QueryClientProvider } from 'react-query';
import { LogBox } from 'react-native';

import { RecoilRoot } from 'recoil';

import Router from 'src/Router';

const client = new QueryClient();

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <Router />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
