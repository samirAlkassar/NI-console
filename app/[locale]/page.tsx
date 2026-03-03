'use client';

import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <h1 className='text-black text-2xl'>
        {t('Welcome to React')}
      </h1>
      
    </div>
  );
}
