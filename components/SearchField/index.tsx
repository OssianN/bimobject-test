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

type SearchFieldProps = {
  form: UseFormReturn<FormType, any, undefined>;
  handleSubmit: () => void;
};

export const SearchField = ({ form, handleSubmit }: SearchFieldProps) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
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
      </form>
    </Form>
  );
};
