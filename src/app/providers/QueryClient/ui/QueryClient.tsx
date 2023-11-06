import { QueryClient as CreateQueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClient = new CreateQueryClient();

export const QueryClient = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
