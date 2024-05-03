import Image from "next/image";

const Loading = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <Image src={"/logo.svg"} height={120} width={120} alt="loading" className=" animate-pulse duration-700" />
    </div>
  );
};

export default Loading;
