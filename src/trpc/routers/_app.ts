import {  createTRPCRouter } from '../init';
import { messagesRouter } from '@/modules/server/procedures';

export const appRouter = createTRPCRouter({
  messages: messagesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
