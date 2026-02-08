import Carousel from "./components/Carousel.jsx";

export default function App() {
  return (
    <div className="App" style={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <Carousel />
    </div>
  );
}
