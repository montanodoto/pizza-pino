import type { ProductItemProps } from "./types";

export default function ProductItem({
  title,
  description,
  imageUrl,
  altText,
}: ProductItemProps) {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt={altText} />
        <div className="px-6 py-2">
          <div className="text-lg mb-2">{title}</div>
          <p className="text-gray-700 text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}
