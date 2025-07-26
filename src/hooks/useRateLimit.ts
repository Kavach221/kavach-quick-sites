import { useState, useCallback } from 'react';

interface RateLimitOptions {
  maxAttempts: number;
  windowMs: number;
}

export const useRateLimit = ({ maxAttempts, windowMs }: RateLimitOptions) => {
  const [attempts, setAttempts] = useState<number[]>([]);

  const isRateLimited = useCallback(() => {
    const now = Date.now();
    const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);
    return recentAttempts.length >= maxAttempts;
  }, [attempts, maxAttempts, windowMs]);

  const recordAttempt = useCallback(() => {
    const now = Date.now();
    setAttempts(prev => {
      const filtered = prev.filter(timestamp => now - timestamp < windowMs);
      return [...filtered, now];
    });
  }, [windowMs]);

  const getRemainingTime = useCallback(() => {
    if (!isRateLimited()) return 0;
    const now = Date.now();
    const oldestRecentAttempt = Math.min(...attempts.filter(timestamp => now - timestamp < windowMs));
    return Math.ceil((oldestRecentAttempt + windowMs - now) / 1000);
  }, [attempts, windowMs, isRateLimited]);

  return {
    isRateLimited: isRateLimited(),
    recordAttempt,
    getRemainingTime
  };
};