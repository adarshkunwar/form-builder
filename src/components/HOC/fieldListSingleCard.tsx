import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TField } from "@/types/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Zod validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .optional(),
  placeholder: z.string().optional(),
  className: z.string().optional(),
  description: z.string().optional(),
  isRequired: z.boolean().optional(),
  isDisabled: z.boolean().optional(),
});

type FieldOptionArrangeSingleCardProps = {
  field: Partial<TField>;
  updateField: (field: Partial<TField>) => void;
};

export default function FieldOptionArrangeSingleCard({
  field,
  updateField,
}: FieldOptionArrangeSingleCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: field.name || "",
      placeholder: field.placeholder || "",
      className: field.className || "",
      description: field.description || "",
      isRequired: field.isDisabled || true,
      isDisabled: field.isDisabled || false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    updateField({
      ...data,
      type: field.type,
    });
    reset(); // Reset form after successful submission
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full">
          {field.type}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Update this field</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill out the form below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              {...register("name")}
              className="col-span-3"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className="col-span-4 text-sm text-red-500">
                {errors.name.message}
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="placeholder" className="text-right">
              placeholder
            </Label>
            <Input
              id="placeholder"
              {...register("placeholder")}
              className="col-span-3"
              placeholder="Enter your "
            />
            {errors.name && (
              <div className="col-span-4 text-sm text-red-500">
                {errors.name.message}
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              {...register("description")}
              className="col-span-3"
              placeholder="Optional description"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isRequired" className="text-right">
              isRequired
            </Label>
            <Checkbox
              id="isRequired"
              {...register("isRequired")}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isDisabled" className="text-right">
              isDisabled
            </Label>
            <Checkbox
              id="isDisabled"
              {...register("isDisabled")}
              className="col-span-3"
            />
          </div>
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
