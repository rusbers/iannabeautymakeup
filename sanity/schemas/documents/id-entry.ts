import { IdCard } from "lucide-react";
import { defineField, defineType } from "sanity";

export const idEntry = defineType({
  name: "idEntry",
  type: "document",
  title: "IDs",
  icon: IdCard,
  fields: [
    defineField({
      name: "idItem",
      type: "string",
      title: "ID Item",
      description:
        "Enter a valid ID to be used for anchor links (e.g., 'about-us', 'contact-section'). Should be URL-friendly with no spaces.",
      validation: (Rule) =>
        Rule.required().regex(/^[a-zA-Z0-9-_.~&/+=:%]+$/, {
          name: "anchor ID",
          invert: false,
        }),
    }),
  ],
});
