import { render, screen } from '@testing-library/react';
import App from './App';
// // App.js
// import React from 'react';
// import CarouselComponent from './CarouselComponent';

// function App() {
//   return (
//     <div className="App">
//       <CarouselComponent />
//     </div>
//   );
// }

// export default App;


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
