import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

jest.mock('@privy-io/react-auth', () => ({
  usePrivy: () => ({
    ready: true,
    authenticated: false,
    login: jest.fn(),
  }),
}));

describe('Home', () => {
  it('renders the main page with all components', () => {
    render(<Home />);
    expect(screen.getByText('Auditoria')).toBeInTheDocument();
    expect(screen.getByText('Filantropia')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Doações' })).toBeInTheDocument();
  });
});
