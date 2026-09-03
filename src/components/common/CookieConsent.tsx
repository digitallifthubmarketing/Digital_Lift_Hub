import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const v = localStorage.getItem('dlh_cookie');
    if (!v) setVisible(true);
  }, []);
  if (!visible) return null;
  return (
    <aside className="fixed bottom-4 inset-x-4 md:inset-x-auto md:left-4 md:max-w-md p-4 rounded-lg bg-secondary shadow-xl border">
      <p className="text-sm">We use cookies to enhance your experience. By using our site, you agree to our Privacy Policy.</p>
      <div className="mt-3 flex gap-2 justify-end">
        <a href="/privacy" className="px-3 py-1 rounded-md bg-muted text-foreground">Read our Privacy Policy</a>
        <button onClick={()=>{localStorage.setItem('dlh_cookie','1'); setVisible(false);}} className="px-3 py-1 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">Accept</button>
      </div>
    </aside>
  );
};
export default CookieConsent;