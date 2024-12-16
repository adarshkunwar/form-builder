import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

const FormCodePreview: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const sourceCode = `import React from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFieldStore from "@/store/fieldStore";
import { TField, TFieldCollection } from "@/types/field";

const FormCodeEditor: React.FC = () => {
  const { fields } = useFieldStore();

  // Generate Zod Schema
  const generateZodSchema = (data: TFieldCollection) => {
    const schema: Record<string, z.ZodType> = {};
    data.flat().forEach((field: TField) => {
      let fieldSchema = z.string();

      if (field.type === "date-picker") {
        fieldSchema = z.string().optional(); // Assume ISO string for date
      } else if (field.type === "file-input") {
        fieldSchema = z.any().optional(); // Files cannot be directly validated
      } else if (field.type === "checkbox") {
        fieldSchema = z.boolean();
      }

      // Add required validation if needed
      if (field.isRequired) {
        fieldSchema = fieldSchema.nonempty("This field is required");
      } else {
        fieldSchema = fieldSchema.optional();
      }

      schema[field.id] = fieldSchema;
    });

    return z.object(schema);
  };

  const validationSchema = generateZodSchema(fields);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((row, rowIndex) => (
        <div key={rowIndex} style={{ marginBottom: "20px" }}>
          {row.map((field) => (
            <div key={field.id} style={{ marginBottom: "10px" }}>
              <label>
                {field.Name || field.type}
                <Controller
                  name={field.id.toString()}
                  control={control}
                  defaultValue={field.type === "checkbox" ? false : ""}
                  render={({ field: controllerField }) => {
                    switch (field.type) {
                      case "input":
                        return (
                          <input
                            {...controllerField}
                            placeholder={field.placeholder}
                            disabled={field.isDisabled}
                            className={field.className}
                          />
                        );
                      case "date-picker":
                        return (
                          <input
                            type="date"
                            {...controllerField}
                            disabled={field.isDisabled}
                            className={field.className}
                          />
                        );
                      case "file-input":
                        return (
                          <input
                            type="file"
                            {...controllerField}
                            disabled={field.isDisabled}
                            className={field.className}
                          />
                        );
                      case "checkbox":
                        return (
                          <input
                            type="checkbox"
                            {...controllerField}
                            disabled={field.isDisabled}
                            className={field.className}
                          />
                        );
                      default:
                        return <div>Unsupported field type</div>;
                    }
                  }}
                />
              </label>
              {errors[field.id] && (
                <p style={{ color: "red" }}>{errors[field.id].message}</p>
              )}
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormCodeEditor;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative mt-4">
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-2 z-50 text-white"
        onClick={handleCopy}
      >
        {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>
      <SyntaxHighlighter
        language="typescript"
        style={materialDark}
        customStyle={{
          borderRadius: "0.5rem",
          maxHeight: "500px",
          overflowY: "auto",
        }}
      >
        {sourceCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default FormCodePreview;
