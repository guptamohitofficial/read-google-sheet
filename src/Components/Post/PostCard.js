import { Link } from "react-router-dom";

function PostCard({ id, image, name, description }) {
  return (
    <>
      <Link to={`/post/${id}`}>
        <div className="group relative">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={image}
              alt="Front of men's Basic Tee in black."
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
            {/* <p className="text-sm font-medium text-gray-900">$35</p> */}
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
