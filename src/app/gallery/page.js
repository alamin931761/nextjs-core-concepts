import Image from "next/image";
// import nextImage from "../../assets/nextjs.png";   // relative path
import nextImage from "@/assets/nextjs.png"; // absolute path / import alias

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">Image Optimizations</h1>

      <h2 className="text-center mt-5">External Image Url</h2>
      <Image
        src="https://nextjs.org/api/docs-og?title=Optimizing:%20Images"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />

      <h2 className="text-center mt-5">Local Image</h2>
      <Image
        src={nextImage}
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
