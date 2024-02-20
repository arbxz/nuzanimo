import Image from "next/image";
import Link from "next/link";

interface CommercialImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataUrl: string;
  credits: string;
  creditLink: string;
}

const CommercialImage = ({
  src,
  alt,
  width,
  height,
  blurDataUrl,
  credits,
  creditLink,
}: CommercialImageProps) => {
  return (
    <div className="group relative overflow-hidden rounded-md shadow">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        blurDataURL={blurDataUrl || ""}
      />
      <div className="absolute w-full font-semibold bottom-0 left-0 translate-y-12 group-hover:translate-y-0 text-white bg-pastel-dark px-4 py-6 transition-transform duration-200">
        <Link target="_blank" href={creditLink}>
          {credits}
        </Link>
      </div>
    </div>
  );
};

export default CommercialImage;
