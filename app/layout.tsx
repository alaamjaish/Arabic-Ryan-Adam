import './globals.css';
import type { Metadata } from 'next';
import { StoreProvider } from '@/lib/store';
import Shell from '@/components/Shell';

export const metadata: Metadata = {
  title: 'Arabic — Ryan & Adam',
  description: 'A living Levantine Arabic reference & practice ground — verbs, families, flashcards, and revision.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Shell>{children}</Shell>
        </StoreProvider>
      </body>
    </html>
  );
}
