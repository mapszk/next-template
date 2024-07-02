interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return (
    <div className={`w-11/12 max-w-[1376px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
