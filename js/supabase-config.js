// Public client configuration. This key is NOT privileged.
// Do not put secret/service_role keys in browser code.
window.PORTFOLIO_SUPABASE = Object.freeze({
  url: 'https://xxqwmkrzylugugsxcggu.supabase.co',
  publishableKey: 'sb_publishable_7LP5EPmomE4UIBWhupVCEw_ImYO9mmd',
  allowEmailSignup: false, // Enable only after verification-email delivery is configured
  allowGoogleLogin: true, // Google provider enabled by owner in Supabase; confirm redirect allowlist
  allowPasswordReset: false // Enable after custom SMTP reset-email delivery is tested
});
