import TaskProvider from './context/TaskContext';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import FormProvider from './context/FormContext';

const App = () => {
	return (
		<div className="container">
			<TaskProvider>
				<FormProvider>
					{/* <Header title={'Some title'} /> */}
					<Header />

					<AddTask />
				</FormProvider>

				<Tasks />
			</TaskProvider>
		</div>
	);
};

export default App;

// stao na:
// 1:22
