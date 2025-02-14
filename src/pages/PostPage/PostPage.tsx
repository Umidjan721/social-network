import { useParams } from "react-router-dom"
import { useLazyGetPostByIdQuery } from "../../store/API/postApi";
import { useEffect } from "react";
import { Post } from "../../components/Post/Post";


export const PostPage = () => {
    const { postId } = useParams();
    const [ fetchTrigger, {data, isLoading, isError} ] = 
    useLazyGetPostByIdQuery();

    useEffect (() => {
        if (postId) {
            fetchTrigger(postId);
        }
    }, [postId] );
    return(
        <div>
            {isError && <h2>Произошла Ошибка</h2>}
            {isLoading && <h2>Идет загруска...</h2>}
            {data && (
                <Post
                postText={data.message.main__text}
                regDate={data.message.reg_date}
                userName={data.message.user_fk.name}
                />
            )}
        </div>
    );
};