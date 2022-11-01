import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');

const handleSubmit = () =>{

    const data = {
        title, description, category
    }
    Inertia.post('/news', data)
}

console.log('props last: ', props)

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full" onChange={(title) => setTitle(title.target.value)} />
                        <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full" onChange={(description) => setDescription(description.target.value)} />
                        <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full" onChange={(category) => setCategory(category.target.value)} />

                        <button className="btn btn-primary btn-sm m-2" onClick={() => handleSubmit()}>Simpan</button>
                        </div>
                    
                </div>
            </div>
        </Authenticated>
    );
}
