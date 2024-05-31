import './App.css';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import Layout from './layout/Layout.jsx';
import HomePage from './components/HomePage/HomePage';
function App() {
    return (
        <div className="App">
            <HistoryRouter history={history}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index path='HomePage' element={<HomePage />} />
                    </Route>
                </Routes>
            </HistoryRouter>
        </div>
    );
}

export default App;
