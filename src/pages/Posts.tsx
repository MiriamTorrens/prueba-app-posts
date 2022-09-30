import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPosts, posts, status } from "../features/posts/postsSlice";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

export default function Posts() {
  const postList = useAppSelector(posts);
  const loading = useAppSelector(status);
  const desorderedPost = postList
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="posts">
            {desorderedPost.map((post) => (
              <Card post={post} key={post.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
