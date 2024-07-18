import { render, screen } from '@testing-library/react';
import HomePage from '../page';

it('render home page', () => {
  render(<HomePage />);
  expect(screen.getByText('Deploy')).toBeInTheDocument();
});
