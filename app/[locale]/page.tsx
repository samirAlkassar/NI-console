'use client';

import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button"

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex bg-white flex-col gap-4 min-h-[calc(100vh-28px)] items-center justify-center font-sans">
      <h1 className='text-black text-2xl'>
        {t('Welcome to React')}
      </h1>
    <Button>Click me</Button> 
    </div>
  );
}
