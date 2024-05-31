import { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import Layout from '../Layout'

const AddBookmark = () => {
    const [values, setValues] = useState({
        kitab: '',
        time: '',
        location: '',
        almaqru: '',
        almaqru_page: '',
        almaqru_srh_page: '',
        alnext: '',
        alnext_page: '',
        alnext_srh_page: '',
    })
    console.log(values)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = async () => {
        const req = await fetch('http://localhost:1999/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        Navigate(to('/'))
        console.log(req)
    }

    return (
        <Layout title={'Tambah Bookmark Baru'}>
            <div className='flex flex-col items-center'>
                <form onSubmit={handleSubmit} className='w-[300px] gap-2 p-4 mt-4 border-2 border-green-700 rounded-2xl flex flex-col'>
                    <p className='text-sm text-center font-medium'>Detail Kajian</p>
                    <select 
                        className='text-sm py-1 px-2 rounded-xl ring-green-700 ring-1' 
                        name='kitab'
                        onChange={handleChange}>
                        <option name="info">~Pilih Kitab~</option>
                        <option name="male">Fathul Qarib</option>
                        <option name="female">Minhajul Abidin</option>
                    </select>
                    {/* <input
                        type='text'
                        placeholder='Nama Kitab'
                        className='text-sm py-1 px-3 rounded-xl ring-green-700 ring-1'
                        name='kitab'
                        defaultValue={values.kitab}
                        onChange={handleChange} />  */}
                    <input
                        type='date'
                        className='text-sm py-1 px-3 rounded-xl ring-green-700 ring-1'
                        name='time'
                        defaultValue={values.time}
                        onChange={handleChange} />
                    <input
                        type='text'
                        placeholder='Lokasi Kajian'
                        className='text-sm py-1 px-3 rounded-xl ring-green-700 ring-1'
                        name='location'
                        defaultValue={values.location}
                        onChange={handleChange} />
                    <p className='text-sm text-center font-medium'>Al-Maqru'</p>
                    <input
                        type='text'
                        placeholder='Fashl yang dibaca'
                        className='text-sm py-1 px-3 rounded-xl ring-green-700 ring-1'
                        name='almaqru'
                        defaultValue={values.almaqru}
                        onChange={handleChange} />
                    <input
                        type='number'
                        placeholder='Halaman kitab yang dibaca'
                        className='text-sm py-1 px-3 rounded-xl ring-green-700 ring-1'
                        name='almaqru_page'
                        defaultValue={values.almaqru_page}
                        onChange={handleChange} />
                    <input
                        type='number'
                        placeholder='Halaman syarah yang dibaca'
                        className='text-sm py-1 px-3 rounded-xl ring-green-700 ring-1'
                        name='almaqru_srh_page'
                        defaultValue={values.almaqru_srh_page}
                        onChange={handleChange} />
                    <p className='text-sm text-center font-medium'>Al-Atiyah'</p>
                    <input
                        type='text'
                        placeholder='Fashl pertemuan berikutnya'
                        className='text-sm py-1 px-3 rounded-xl ring-green-700 ring-1'
                        name='alnext'
                        defaultValue={values.alnext}
                        onChange={handleChange} />
                    <input
                        type='number'
                        placeholder='Halaman Fashl berikutnya'
                        className='text-sm py-1 px-3 rounded-xl ring-green-700 ring-1'
                        name='alnext_page'
                        defaultValue={values.alnext_page}
                        onChange={handleChange} />
                    <input
                        type='number'
                        placeholder='Halaman syarah berikutnya'
                        className='text-sm py-1 px-3 rounded-xl ring-green-700 ring-1'
                        name='alnext_srh_page'
                        defaultValue={values.alnext_srh_page}
                        onChange={handleChange} />
                    <button type='submit' className='bg-green-300 hover:bg-green-400 rounded-xl py-2'>Tambah</button>
                    <Link to='/' className='bg-gray-400 hover:bg-gray-500 rounded-xl py-2 text-center'>
                        Cancel
                    </Link>
                </form>
            </div>
        </Layout>
    )
}

export default AddBookmark