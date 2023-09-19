import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productid: string;
}
