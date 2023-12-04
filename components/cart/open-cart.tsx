export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center border-neutral-200 bg-black px-20 py-5 font-bold text-white transition-colors">
      {/*
      <ShoppingCartIcon
        className={clsx('h-4 transition-all ease-in-out hover:scale-110 ', className)}
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-red-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      />
       */}
      <span>Cart</span>{' '}
      <span className="xs4:inline text-yellow-300">
        (<span className="text-green-300">{quantity ? quantity : 0}</span>)
      </span>
    </div>
  );
}
