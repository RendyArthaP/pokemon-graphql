import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar'

it("should render", () => {
  render(<Navbar />);
  const main = screen.getByTestId('navbar')
  expect(main).toBeInTheDocument();
});