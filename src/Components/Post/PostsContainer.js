
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PostsContainer({ title, posts }) {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          {title ? (
            <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900">
              {title.text}
            </h2>
          ) : null}
          {posts ? (
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {posts}
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <Skeleton className="grid w-full" height={100}/>
              <Skeleton className="grid w-full" height={100}/>
              <Skeleton className="grid w-full" height={100}/>
              <Skeleton className="grid w-full" height={100}/>
              <Skeleton className="grid w-full" height={100}/>
              <Skeleton className="grid w-full" height={100}/>
              <Skeleton className="grid w-full" height={100}/>
              <Skeleton className="grid w-full" height={100}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PostsContainer;
