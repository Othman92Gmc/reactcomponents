import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import NavBar from './component/NavBar';
import ListOfDestinations from './component/ListOfDestinations';
import SlideShow from './component/SlideShow';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <SlideShow></SlideShow>
      <ListOfDestinations></ListOfDestinations>
    </>
  );
}

export default App;
