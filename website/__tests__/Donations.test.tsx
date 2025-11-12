import { render, screen } from '@testing-library/react';
import Donations from '../src/components/Donations';

jest.mock('@privy-io/react-auth', () => ({
  usePrivy: () => ({
    ready: true,
    authenticated: false,
    login: jest.fn(),
  }),
}));

describe('Donations', () => {
  it('renders the Donations component', () => {
    const handleDonate = jest.fn();
    const showNotification = jest.fn();
    render(<Donations totalDonations={10} handleDonate={handleDonate} showNotification={showNotification} />);
    expect(screen.getByText('Doações')).toBeInTheDocument();
  });
});
