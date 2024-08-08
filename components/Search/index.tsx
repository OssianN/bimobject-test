'use client';
import { useForm } from 'react-hook-form';
import { SearchField } from '../SearchField';
import { SearchResults } from '../SearchResults';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { formSchema, type SearchResultResponse, type FormType } from '@/types';
import { useRouter } from 'next/navigation';

export const Search = () => {
  const [searchResults, setSearchResults] =
    useState<SearchResultResponse | null>(null);
  const searchText = useSearchParams().get('searchText') ?? '';
  const router = useRouter();

  const form = useForm<FormType>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchInput: searchText,
    },
  });

  const handleSubmit = async () => {
    const searchInput = form.getValues().searchInput;
    router.push(`${window.location.pathname}?searchText=${searchInput}`);

    const response = await fetch('/api/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ searchText: searchInput }),
    });

    const data: SearchResultResponse = await response.json();
    setSearchResults(data);
  };

  return (
    <div>
      <SearchField form={form} handleSubmit={handleSubmit} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
};
