import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { number, string } from "yup"
import { baseUrl } from "../../utils/baseUrl"

interface IPost  {
    main__text:string,
    user_id:number,
    id: number,
    reg_date:string,
    user_fk: {
        user_city:string,
        phone_number:number,
        reg_date:string,
        email:string,
        id:number,
        name:string,
        password: string
    },
    photos:string [];
    comments:string [];
}

interface IGetAllPostsResponse{
    status:number,
    message: IPost [];
}

interface IGetPostByIdResponse{
    status: number;
    message: IPost;
}

export const postApi = createApi({
    reducerPath:"postApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
       getAllPosts:builder.query<IGetAllPostsResponse, null>(
        {query: () => "/post",}
       ),
       getPostById: builder.query<IGetPostByIdResponse, string>({
        query:(postId)=> `/post?post_id=${postId}`,
       }),
    }),
});

export const {
    useGetAllPostsQuery, 
    useLazyGetAllPostsQuery, 
    useLazyGetPostByIdQuery
} = postApi;