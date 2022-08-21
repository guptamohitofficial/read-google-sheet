import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faDownload,
  faThumbsUp,
  faClock,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useEffect, useState } from "react";

function PostDetail(props) {

  const [post, setPost] = useState(props?.post ? props.post : {});
  const [site, setSite] = useState({});

  useEffect(() => {
    setPost(props.post);
  }, [props]);

  useEffect(() => {
    const siteString = window.localStorage.getItem('siteDetails') || '';
    if (siteString) {
      setSite(JSON.parse(siteString));
    }
  }, []);

  const downloadImage = () => {
    if (post?.downloadable) {
      let updatedPost = {...post};
      updatedPost.downloads++;
      setPost(updatedPost);
      // updatePost(post.id, updatedPost);
      window.open(post.downloadableLink ? post.downloadableLink : post.image, '_blank');
    }
  };

  const likeImage = () => {
      let updatedPost = {...post};
      updatedPost.likes++;
      setPost(updatedPost);
      // updatePost(post.id, updatedPost);
  };

  const mesageOnWhatsapp = () => {
    if (post?.whatsapp?.length > 9) {
      const whatsappApiLinkMessage = `Hey ${site?.maintainer?.name}, I would like to chat about ${window.location.origin}/post/${post.id}`;
      const whatsappApiLink = `https://api.whatsapp.com/send/?phone=${post?.whatsapp}&text=${whatsappApiLinkMessage}`;
      window.open(whatsappApiLink, '_blank');
    } else {
      window.alert(
        `Invalid WhatsApp Contact, Please notify from the Owner at ${site?.maintainer?.email}`
      );
      // notify admin with a mail
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto pt-6 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-8 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={post?.image}
              alt={`${post.name} describing ${post.description}`}
              className="w-full h-full object-center object-cover"
            />
          </div>
          {post?.moreImages ? (
            <>
              <span id="more-images"></span>
              <div className="max-w-2xl mx-auto lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8">
                {post.moreImages.map((image) => (
                  <div key={image} className="mt-6 hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                    <img
                      src={image}
                      alt={`${post.name} additional`}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
        <div className="mt-4 lg:mt-0 lg:row-span-3">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight sm:truncate">
            {post.name}
          </h2>

          <div className="mt-4">
            <div role="list" className="list-disc text-sm space-y-1">
              <div className="text-gray-600">
                <FontAwesomeIcon icon={faEye} />
                <span className="pl-2">
                  {post?.views ? post.views : 0} Views
                </span>
              </div>
              <div className="text-gray-600">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span className="pl-2">
                  {post?.likes ? post.likes : 0} Likes
                </span>
              </div>
              {post?.downloadable ? (
                <div className="text-gray-600">
                  <FontAwesomeIcon icon={faDownload} />
                  <span className="pl-2">
                    {post?.downloads ? post.downloads : 0} Downloads
                  </span>
                </div>
              ) : null}
              {post?.createdAt ? (
                <div className="text-gray-600">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="pl-2">
                    {moment(post.createdAt).fromNow(true)}
                  </span>
                </div>
              ) : null}
              {post?.moreImages?.length > 0 ? (
                <a href="#more-images">
                  <div className="text-gray-600">
                    <FontAwesomeIcon icon={faImages} />
                    <span className="pl-2">
                      Click here for {post.moreImages.length} more images
                    </span>
                  </div>
                </a>
              ) : null}
            </div>
          </div>
          {post?.description ? (
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="pt-4 text-base text-gray-900">
                  {post.description}
                </p>
              </div>
            </div>
          ) : null}
          {post?.whatsapp ? (
            <button
              type="button"
              className="mt-10 w-full bg-green-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => mesageOnWhatsapp()}
            >
              WhatsApp
            </button>
          ) : null}
          {post?.downloadable ? (
            <button
              type="button"
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => downloadImage()}
            >
              Download
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default PostDetail;
