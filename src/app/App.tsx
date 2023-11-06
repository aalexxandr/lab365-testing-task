import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { Router } from './providers/Router';
import { Content } from './providers/Content';
import { Navigation } from 'widgets/Navigation';
import { QueryClient } from './providers/QueryClient';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<Content>
			<QueryClient>
				<ToastContainer
					position='bottom-left'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
				<Navigation />
				<Router />
			</QueryClient>
		</Content>
	);
}

export default App;
