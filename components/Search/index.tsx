'use client';
import { useForm } from 'react-hook-form';
import { SearchForm } from '../SearchForm';
import { SearchResults } from '../SearchResults';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { formSchema, type SearchResultResponse, type FormType } from '@/types';
import { LoadingSpinner } from '../ui/spinner';

type SearchProps = {
  serverSearchResult?: SearchResultResponse;
};

export const Search = ({ serverSearchResult }: SearchProps) => {
  const [searchResults, setSearchResults] = useState<
    SearchResultResponse | undefined
  >(serverSearchResult);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
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

  const onSubmit = async () => {
    setLoading(true);
    setSearchResults(undefined);
    const searchInput = form.getValues().searchInput;
    router.push(`${window.location.pathname}?searchText=${searchInput}`);

    const response = await fetch('/api/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ searchText: searchInput }),
    });

    const data: { result: SearchResultResponse; error?: string } =
      await response.json();

    setSearchResults(data.result);
    setError(data.error);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-search-width">
      <SearchForm form={form} onSubmit={onSubmit} />
      <SearchResults searchResults={searchResults} />
      {loading && <LoadingSpinner />}
      {error && <p>{error}</p>}
    </div>
  );
};
