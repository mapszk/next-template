interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => {};
}

export default function Button({ children, className, onClick }: Props) {
  const defaultClasses =
    "h-10 md:h-12 bg-black rounded-full px-6 md:px-8 border-2 font-bold border-color-white";
  return (
    <button onClick={onClick} className={`${defaultClasses} ${className}`}>
      {children}
    </button>
  );
}
