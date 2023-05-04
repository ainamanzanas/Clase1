import { createClient } from '@supabase/supabase-js'

const baseURL = 'https://mmmqjsqgztritigynxui.supabase.co';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tbXFqc3FnenRyaXRpZ3lueHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxNDkwODQsImV4cCI6MTk5NzcyNTA4NH0.UFyHKb6RPa2IQjP7byHIFXlvvZYhTSPkn80QmAcspME';

export default createClient(baseURL, apiKey)

