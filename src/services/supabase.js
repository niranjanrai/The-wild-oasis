import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pqpglrihluykcrurhmaq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcGdscmlobHV5a2NydXJobWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4NjI5NzcsImV4cCI6MjAwNjQzODk3N30.QOowt3B9bGQK-pUdd5lBwDjV69PA_BETKFt7GDcaAeA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
