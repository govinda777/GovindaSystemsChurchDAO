'use client';

import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import Hero from '../components/Hero';
import ChurchFoundation from '../components/ChurchFoundation';
import Ceremonies from '../components/Ceremonies';
import Donations from '../components/Donations';
import Audit from '../components/Audit';
import Philanthropy from '../components/Philanthropy';
import CreateChurch from '../components/CreateChurch';
import About from '../components/About';
import Notification from '../components/Notification';
import Link from 'next/link';

export default function Home() {
  const { authenticated, login } = usePrivy();
  const [notification, setNotification] = useState<{
    message: string;
    type: string;
  } | null>(null);
  const [totalDonations, setTotalDonations] = useState(12.5);

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleDonate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!authenticated) {
      showNotification('Por favor, conecte sua carteira primeiro', 'error');
      login();
      return;
    }
    const form = event.currentTarget;
    const amountInput = form.elements.namedItem('amount') as HTMLInputElement;
    const amount = parseFloat(amountInput.value);

    if (!amount || amount <= 0) {
      showNotification('Por favor, insira um valor válido', 'error');
      return;
    }

    showNotification(`Doação de ${amount} ETH realizada com sucesso!`, 'success');
    setTotalDonations((prev) => prev + amount);
    form.reset();
  };

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <Hero />
      <ChurchFoundation />
      <Ceremonies openScheduleModal={() => {
        // This will be replaced with a link to the contact page
        window.location.href = '/pages/contato';
      }} />
      <Donations
        totalDonations={totalDonations}
        handleDonate={handleDonate}
        showNotification={showNotification}
      />
      <Audit />
      <Philanthropy />
      <CreateChurch />
      <About />
    </>
  );
}
