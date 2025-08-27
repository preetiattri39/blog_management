import {Link} from '@inertiajs/react';
import React from 'react';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {format} from 'date-fns';
im


export default function Index({posts}) {
    return (
        <div className="p-6 bg-white border-b border-gray-200">
            <Head title="Posts" />
            <Link href={route('posts.create')} className="px-4 py-2 bg-blue-500 text-white rounded-md">Create Post</Link>
            <table className="min-w-full mt-4 bg-white">
                <thead>
                <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Title</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Body</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Created At</th>
                    <th className ="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">User</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Actions</th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {posts.data.map((post) => (
                    <tr key={post.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="text-sm leading-5 text-gray-800">{post.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="text-sm leading-5 text-gray-800">{post.body}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="text-sm leading-5 text-gray-800">{format(new Date(post.created_at), 'PPP p')}</div>
                        </td>
                         <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <div className="text-sm leading-5 text-gray-800">{post.user.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <Link href={route('posts.edit', post.id)} className="text-blue-500 hover:underline">Edit</Link>
                             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            <Link href={route('posts.destroy', post.id)} className="text-blue-500 hover:underline">Delete</Link>
                        </td>
                        </td>
                        
                    </tr>
    )

