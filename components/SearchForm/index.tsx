'use client';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import type { FormType } from '@/types';
import type { UseFormReturn } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

type SearchFormProps = {
  form: UseFormReturn<FormType, any, undefined>;
  onSubmit: () => void;
};

export const SearchForm = ({ form, onSubmit }: SearchFormProps) => {
  const searchText = useSearchParams().get('searchText') ?? '';

  return (
    <Form {...form}>
      <motion.form
        data-testid="search-form"
        initial={{ y: searchText ? 0 : 'calc(50vh - 16rem)' }}
        animate={{ y: searchText ? 0 : 'calc(50vh - 16rem)' }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 mb-12 w-full"
      >
        <FormField
          control={form.control}
          name="searchInput"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  className="resize-none"
                  placeholder="Search..."
                />
              </FormControl>
              <FormDescription>Sarch for a movie title.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Search</Button>
      </motion.form>
    </Form>
  );
};
