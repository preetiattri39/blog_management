import { useForm} from '@inertiajs/inertia-react';
import React from 'react';

export default function Create() {
    const {data, setData, post, processing, errors} = useForm({
        title: '',
        body: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('posts.store'));
    }

    return (
        <div className="p-6 bg-white border-b border-gray-200">
            <h1 className="text-2xl font-bold mb-4">Create Post</h1>
            <form onSubmit={submit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.title && <div className="text-red-500 text-sm mt-2">{errors.title}</div>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                        Body
                    </label>
                    <textarea
                        id="body"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                    {errors.body && <div className="text-red-500 text-sm mt-2">{errors.body}</div>}
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}
