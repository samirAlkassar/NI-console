'use client';

import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { AppSubSidebar } from '@/components/sub-sidebar/app-subSidebar';
import TestForm from '@/components/test-form';
import AppDrawer from '@/components/drawer/app-drawer';
import AppFooter from '@/components/footer/app-footer';
import { changeLanguage } from "@/i18n/changeLanguage";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import * as React from "react"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const { t, i18n } = useTranslation();
  
  const frameworks = [
    "Next.js",
    "SvelteKit",
    "Nuxt.js",
    "Remix",
    "Astro",
  ] as const
  const anchor = useComboboxAnchor();

  return (
    <div className='flex h-[calc(100vh-var(--main-header-height))] w-full'>
      <AppSubSidebar currentView='dashboard' onNavigate={() => { }} />
      <div className="w-full h-full bg-background p-6 flex flex-col items-start gap-4 overflow-y-scroll">
        <TestForm />
        <AppDrawer />
        <div className='flex gap-4'>
          <Button onClick={() => changeLanguage("en")}>English</Button>
          <Button onClick={() => changeLanguage("ar")}>Arabic</Button>
        </div>

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Input Component</span>
        <Input placeholder='John Doe'/>

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Input Component subtle</span>
        <Input variant={"subtle"} placeholder='John Doe'/>

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Textarea Component</span>
        <Textarea placeholder="Write something..." />

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Textarea Component subtle</span>
        <Textarea variant="subtle" placeholder="Muted textarea..." />

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Switch Component</span>
        <Switch />

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Checkbox Component</span>
        <Checkbox />

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Select Component</span>
        <Select>
          <SelectTrigger className="w-45" variant={"subtle"}>
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Tabs Component</span>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Multi-select Component</span>
        <Combobox
          multiple
          autoHighlight
          items={frameworks}
          defaultValue={[frameworks[0]]}>
          <ComboboxChips ref={anchor} className="w-full max-w-md">
            <ComboboxValue>
              {(values) => (
                <React.Fragment>
                  {values.map((value: string) => (
                    <ComboboxChip key={value}>{value}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput />
                </React.Fragment>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>

        <span className='bg-destructive py-1 px-2 text-sm text-white mt-4'>Pagination</span>
        <div className='flex gap-2 items-center justify-center'>
          <Button variant={"outline"}>
            <ChevronLeft />
            <span>Previous</span>
          </Button>

          {[1,2,3].map((page, index)=>(
            <Button key={index}>{page}</Button>
          ))}

          <Button variant={"outline"}>
            <span>Next</span>
            <ChevronRight />
          </Button>
        </div>

        <AppFooter />
      </div>
    </div>
  );
}
