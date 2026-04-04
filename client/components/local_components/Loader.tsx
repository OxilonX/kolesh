import { Spinner } from "../ui/spinner";
const Loader = () => {
  return (
    <div className="h-100vh w-full flex items-center justify-center ">
      <Spinner className="size-12" />
    </div>
  );
};

export default Loader;
