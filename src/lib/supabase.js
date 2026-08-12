import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || 'https://uozglvqfweplzxhzzxxp.supabase.co';
const supabaseAnonKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || 'sb_publishable_7rbHwfsS1e_2EJYsH3fbLw_t36QxON1';

if (typeof globalThis.WebSocket === 'undefined') {
  globalThis.WebSocket = class {};
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

