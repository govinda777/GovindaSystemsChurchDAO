import { render, screen } from '@testing-library/react';
import Audit from '../src/components/Audit';

describe('Audit', () => {
  it('renders the Audit component', () => {
    render(<Audit />);
    expect(screen.getByText('Auditoria')).toBeInTheDocument();
  });
});
