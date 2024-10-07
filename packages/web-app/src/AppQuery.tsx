import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({});

export type AppQueryProps = {
  children: ReactNode;
};

export default function AppQuery({ children }: AppQueryProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
