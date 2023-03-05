import type { Handle } from '@sveltejs/kit';
import { db, setup } from '$lib/server/db';

setup();

export const handle = (async ({ event, resolve }) => {
  event.locals.db = db;
  const response = await resolve(event);
  return response;
}) satisfies Handle;
