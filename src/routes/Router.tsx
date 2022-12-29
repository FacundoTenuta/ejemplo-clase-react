import { useRoutes } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { HomePage } from '../pages/HomePage';
import { Page1 } from '../pages/Page1';
import { Page2 } from '../pages/Page2';

export default function Router() {
	return useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{ path: '/', element: <HomePage /> },
				{
					path: 'pagina1',
					element: <Page1 />,
				},
				{
					path: 'pagina2',
					element: <Page2 />,
				},
			],
		},
	]);
}
