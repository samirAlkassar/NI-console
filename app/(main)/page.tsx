'use client';

import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { AppSubSidebar } from '@/components/sub-sidebar/app-subSidebar';
import TestForm from '@/components/TestForm';
import AppDrawer from '@/components/drawer/app-drawer';
import AppFooter from '@/components/footer/app-footer';
import { changeLanguage } from "@/i18n/changeLanguage";
import { Button } from '@/components/ui/button';

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className='flex h-[calc(100vh-var(--main-header-height))] w-full'>
      <AppSubSidebar currentView='dashboard' onNavigate={() => { }} />
      <div className="w-full h-full bg-background p-6 flex flex-col items-start gap-4 overflow-y-scroll">
        <TestForm />
        <AppDrawer />
        <AppFooter />
        <Button onClick={() => changeLanguage("en")}>English</Button>
        <Button onClick={() => changeLanguage("ar")}>Arabic</Button>
      </div>
    </div>
  );
}
