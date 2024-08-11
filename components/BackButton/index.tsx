'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="absolute top-8 left-8 md:top-24 md:left-24"
      variant="secondary"
    >
      Back
    </Button>
  );
};
