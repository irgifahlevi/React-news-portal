<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = new NewsCollection(News::paginate(8));
        return Inertia::render('Homepage', [
            'title' => "Portal News",
            'description' => "Selamat datang di portal berita",
            'news' => $news,
        ]);
    }

    public function store(Request $request)
    {

        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->save();
        return redirect()->back()->with('pesan', 'Berita berhsil dibuat');
    }
}
