import logo from './assets/quiz-logo.png'
import ContentRenderer from './components/ContentRenderer';
import QuestionsContextProvider from './store/questionsContextProvider';

function App() {

    return (
        <main className="lg:flex flex-col items-center">
            <div className='w-full lg:mt-6 text-center mb-8'>
                <img className='m-auto size-12 ' src={logo} alt='logo' />
                <h1 className='text-5xl font-bold tracking-widest mt-4 bg-gradient-to-r from-purple-300 to-violet-600 inline-block text-transparent bg-clip-text'>REACTQUIZ</h1>
            </div>
            <QuestionsContextProvider>
                <ContentRenderer />
            </QuestionsContextProvider>
        </main>
    );
}

export default App;
