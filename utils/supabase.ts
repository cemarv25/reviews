import { createClient, PostgrestError } from '@supabase/supabase-js';

export const getSupabase = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_KEY as string
  );
};

export const isPostgrestError = (error: any): error is PostgrestError => {
  return (
    'message' in error &&
    'details' in error &&
    'hint' in error &&
    'code' in error
  );
};
