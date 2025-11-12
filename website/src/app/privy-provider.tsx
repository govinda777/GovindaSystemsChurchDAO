'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId="cmgjrqlx901b4jo0cirg5zwf3"
    >
      {children}
    </PrivyProvider>
  );
}