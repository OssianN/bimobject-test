'use client';
import React from 'react';
import { notFound } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  if (error.digest === 'NEXT_NOT_FOUND') {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center gap-8 p-12 md:p-24">
      <h1 className="text-3xl">Something went wrong...</h1>
      <p className="opacity-80">Try again or go back to the start page.</p>

      <div className="flex gap-4 justify-center w-full max-w-search-width">
        <Button className="flex-1 max-w-48" onClick={() => reset()}>
          Try again
        </Button>
        <Link
          className={`${buttonVariants({
            variant: 'outline',
            size: 'lg',
          })} flex-1 max-w-48`}
          href="/"
        >
          Start page
        </Link>
      </div>
    </div>
  );
}
