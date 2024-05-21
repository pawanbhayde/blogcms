"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Tiptap from "@/components/tiptap";

const CreateArticle = () => {
  const fromSchema = z.object({
    title: z
      .string()
      .min(5, { message: "Hey the title is not long enough" })
      .max(100, { message: "Hey the title is too long" }),
    blogcontent: z
      .string()
      .min(100, { message: "Hey the blog content is not long enough" })
      .max(1000, { message: "Hey the blog content is too long" })
      .trim(),
  });

  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      blogcontent: "",
    },
  });

  function onSubmit(values: z.infer<typeof fromSchema>) {
    console.log(values);
  }
  return (
    <main>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Article Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="blogcontent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Content</FormLabel>
                <FormControl>
                  <Tiptap descreption={field.name} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button className="absolute top-20 right-20" type="submit">
            Publish
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default CreateArticle;
