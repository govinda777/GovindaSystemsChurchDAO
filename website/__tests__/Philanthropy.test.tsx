import { render, screen } from '@testing-library/react';
import Philanthropy from '../src/components/Philanthropy';

describe('Philanthropy', () => {
  it('renders the Philanthropy component', () => {
    render(<Philanthropy />);
    expect(screen.getByText('Filantropia')).toBeInTheDocument();
  });
});
