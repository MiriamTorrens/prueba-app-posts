import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPosts, posts, status } from "../features/posts/postsSlice";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { PostType } from "../types";

export default function Posts() {
  const postList = useAppSelector(posts);
  const loading = useAppSelector(status);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState<string>("");
  const [postState, setPostState] = useState<Array<PostType>>([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    const filteredPost = postList.filter(
      (p) => p.body.includes(query) || p.title.includes(query)
    );
    setPostState(filteredPost);
  }, [dispatch, query, postList]);

  return (
    <>
      <NavBar query={query} setQuery={setQuery} />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="posts">
            {postState.map((post) => (
              <Card post={post} key={post.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
