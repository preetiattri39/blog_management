import React from 'react';
import {useForm, usePage} from '@inertiajs/react';
import { comment } from 'postcss';

export default function Show() {
const{data,setData,post:submit,processing,errors} = useForm({
    username:"",
    email:"",
    comment:""
});


const handelSubmit = (e) => {
    e.preventDefault();
    submit(route('comments.store',post.id));
};
const {post} = usePage().props;
    return (
        <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="mb-4">{post.body}</p>
            <h2 className="text-xl font-semibold mb-2">Comments</h2>
            {post.comments.map((comment) => (
                <div key={comment.id} className="mb-2 p-2 border border-gray-300 rounded">
                    <p className="font-bold">{comment.username} ({comment.email})</p>
                    <p>{comment.comment}</p>
                </div>
            ))}
            <form onSubmit={handelSubmit} className="mt-4">
                <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.username && <div className="text-red-600 text-sm">{errors.username}</div>}
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.email && <div className="text-red-600 text-sm">{errors.email}</div>}
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Comment</label>
                    <textarea
                        value={data.comment}
                        onChange={(e) => setData('comment', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                    {errors.comment && <div className="text-red-600 text-sm">{errors.comment}</div>}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Submit Comment
                </button>
            </form>
        </div>
    );
}