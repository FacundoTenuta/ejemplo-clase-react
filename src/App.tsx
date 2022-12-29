import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './routes/Router';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>
				<Router />
			</NextUIProvider>
		</QueryClientProvider>
	);
}

export default App;
