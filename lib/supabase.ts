import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Single browser client. No real auth — students "sign in" with name + email,
// which we upsert into ryan_adam_students. All progress is keyed by email.
let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null; // app still runs offline (localStorage only)
  if (!client) {
    client = createClient(url, key, {
      auth: { persistSession: false },
    });
  }
  return client;
}

export const TABLES = {
  students: 'ryan_adam_students',
  progress: 'ryan_adam_progress',
} as const;
