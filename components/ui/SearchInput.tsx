import * as React from "react";
import SearchIcon from '@/assets/icons/searchLight.webp';
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface InputProps  {
  className?: string;
  placeholder?: string;
  // onChange: (text: string) => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder="", ...props }, ref) => {

    return (
      <div className={cn("relative flex items-center gap-2 group rounded-2xl border border-input bg-input px-2 py-1.5 text-sm shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full", className)}>
        <Image src={SearchIcon} width={14} height={14} alt='search' className='centerItem' />
        <input
          // type={type}
          className={`pl-6 flex-1 bg-transparent border-none outline-none placeholder:text-muted-foreground`}
          ref={ref}
          placeholder={placeholder}
          // onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      </div>
    );
  },
);
SearchInput.displayName = "Input";

export { SearchInput };
