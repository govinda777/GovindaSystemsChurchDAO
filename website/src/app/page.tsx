'use client';

import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import Hero from '../components/Hero';
import Values from '../components/Values';
import ChurchFoundation from '../components/ChurchFoundation';
import NFTMembership from '../components/NFTMembership';
import Ceremonies from '../components/Ceremonies';
import Donations from '../components/Donations';
import CreateChurch from '../components/CreateChurch';
import About from '../components/About';
import ScheduleModal from '../components/ScheduleModal';
import Notification from '../components/Notification';

export default function Home() {
  const { authenticated, login } = usePrivy();
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
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

  const openScheduleModal = () => setScheduleModalOpen(true);
  const closeScheduleModal = () => setScheduleModalOpen(false);

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

  const handleSchedule = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const ceremonyInput = form.elements.namedItem(
      'ceremony'
    ) as HTMLSelectElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const ceremony = ceremonyInput.value;

    if (!name || !email || !ceremony) {
      showNotification('Por favor, preencha todos os campos', 'error');
      return;
    }

    showNotification(
      `Agendamento para ${ceremony} confirmado!`,
      'success'
    );
    closeScheduleModal();
    form.reset();
  };

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <Hero />
      <Values />
      <ChurchFoundation />
      <NFTMembership />
      <Ceremonies openScheduleModal={openScheduleModal} />
      <Donations
        totalDonations={totalDonations}
        handleDonate={handleDonate}
        showNotification={showNotification}
      />
      <CreateChurch />
      <About />
      <ScheduleModal
        isScheduleModalOpen={isScheduleModalOpen}
        closeScheduleModal={closeScheduleModal}
        handleSchedule={handleSchedule}
      />
    </>
  );
}