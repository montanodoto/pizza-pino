export function SecondaryButton({ on_click, className }: any) {
  return (
    <button
      className={`del_btn mt-4 block bg-red-500 p-1 font-bold text-white ${className}`}
      onClick={on_click}
    >
      CONTINUE
    </button>
  );
}

export function PrimaryButton({ title, on_click }: any) {
  return (
    <button
      style={{ width: 525, height: 51 }}
      className={`m-1 bg-red-600 px-6 py-2 font-bold text-white`}
      onClick={on_click}
    >
      {title}
    </button>
  );
}
