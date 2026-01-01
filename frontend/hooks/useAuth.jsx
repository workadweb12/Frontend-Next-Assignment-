'use client'

import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check sessionStorage for authentication (only in browser)
    if (typeof window !== 'undefined') {
      const isAuthenticated = sessionStorage.getItem('isAuthenticated');
      const userData = sessionStorage.getItem('user');
      
      if (isAuthenticated === 'true' && userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (err) {
          console.error('Error parsing user data:', err);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    }
    
    setLoading(false);
  }, []);

  return { user, loading };
}

