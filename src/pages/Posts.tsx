import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPosts, posts } from "../features/posts/postsSlice";
import NavBar from '../components/NavBar';
import Card from "../components/Card";

export default function Posts() {
    const postList = useAppSelector(posts);
    const desorderedPost = postList.slice().sort((a, b) => a.title.localeCompare(b.title));
   
    const dispatch = useAppDispatch();
   
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
  
    return (
        <>
            <NavBar />
            <div className="Posts">
                {desorderedPost.map((post) =>
                    <Card post={post} key={post.id} /> 
                )}
            </div>
        </>
    )
}