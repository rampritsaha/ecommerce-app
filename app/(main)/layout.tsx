import { Header } from '@/components/header';
import React, { PropsWithChildren } from 'react'

function MainLayout({ children }:PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default MainLayout