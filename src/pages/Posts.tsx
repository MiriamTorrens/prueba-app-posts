import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPosts, posts, status } from "../features/posts/postsSlice";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { PostType } from "../types";
import NoResults from "../components/NoResults";

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
      (p) =>
        p.body.includes(query.toLowerCase()) ||
        p.title.includes(query.toLowerCase())
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
          {postState.length ? (
            <div className="posts">
              {postState.map((post) => (
                <Card post={post} key={post.id} />
              ))}
            </div>
          ) : (
            <NoResults query={query} />
          )}
        </div>
      )}
    </>
  );
}
