'use client'
import Form from 'next/form';
import axios from 'axios'
import { useState, FormEvent } from 'react';

export default function Search() {
    const [activeIngredients, setActiveIngredients] = useState([""])


    async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setActiveIngredients([])
    try {
        const formData = new FormData(event.currentTarget)
        const text = formData.get('query')
        const response = await axios.get(
        `https://api.fda.gov/drug/ndc.json?search=brand_name:${text}`
        )
        let ingredients = []
        for (const key in response.data.results[0].active_ingredients)
        ingredients.push(response.data.results[0].active_ingredients[key]["name"])
        setActiveIngredients(ingredients)
    }
    catch (err) {
        console.log(err)
    }
    }

    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 bg-slate-500 font-[family-name:var(--font-geist-sans)]">
        <div className="bg-white border-4">
        <Form action='/' onSubmit={onSubmit}>
            <input className="text-slate-800 w-100 p-2" name="query" placeholder="Search by Brand Name" />
            <button className="text-teal-500 p-2" type="submit" >Submit</button>
        </Form>
        </div>

        <div className="grid grid-flow-row gap-10 items-center justify-items-center sm:p-20 bg-slate-500 font-[family-name:var(--font-geist-sans)]">
        <div className='items-center justify-items-center'>
            <h3>{(activeIngredients[0]!=="") ? "Active Ingredients:" : "No Results"}</h3>
            <ul className='list-disc'>
            {activeIngredients.map(element => (<li>{element}</li>))}
            </ul></div>
        </div>
    </div>
    );
}