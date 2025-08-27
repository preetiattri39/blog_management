<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
class CommentController extends Controller
{
    public function store(Request $request, $postId)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'comment' => 'required|string',
        ]);

        $post = Post::findOrFail($postId);

        $comment = new Comment();
        $comment->post_id = $post->id;
        $comment->username = $request->input('username');
        $comment->email = $request->input('email');
        $comment->comment = $request->input('comment');
        $comment->save();

        return redirect()->route('posts.show', $postId)->with('success', 'Comment added successfully.');
    }   
}
