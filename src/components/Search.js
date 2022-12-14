import React from 'react'

const Search = (props)=> {
    return (
        <div className='max-w-sm rounded shadow-xl mx-auto my-8 py-4 px-4 border border-black-200 h-44 flex-col items-center'>
            <div className='flex justify-between'>
                <div>
                    <label htmlFor="countries" className="block mb-2 text-sm text-gray-500">Select your sign</label>
                    <select onChange={props.onChangeSign} id="countries" className="bg-gray-50 border border-gray-300">
                        <option defaultValue="">Choose a sign</option>
                        <option value="aries">Aries</option>
                        <option value="taurus">Taurus</option>
                        <option value="gemini">Gemini</option>
                        <option value="cancer">Cancer</option>
                        <option value="leo">Leo</option>
                        <option value="virgo">Virgo</option>
                        <option value="libra">Libra</option>
                        <option value="scorpio">Scorpio</option>
                        <option value="sagittaruis">Sagittaruis</option>
                        <option value="capricorn">Capricorn</option>
                        <option value="aquarius">Aquarius</option>
                        <option value="pisces">Pisces</option>
                    </select>
                </div>
                
                <div className='form-check cursor-pointer' onChange={props.onChangeDate}>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-500">Select your sign</label>
                    <div>
                        <input className='form-check-input mr-3' type='radio' name="date" id='ps' value="today" />
                        <label htmlFor='ps'>Today</label>
                    </div>
                    <div>
                        <input className='form-check-input mr-3' type='radio' name="date" id='ps2' value="tomorrow"/>
                        <label htmlFor='ps2'>Tomorrow</label>
                    </div>
                    <div>
                        <input className='form-check-input mr-3' type='radio' name="date" id='ps2' value="yesterday"/>
                        <label htmlFor='ps2'>Yesterday</label>
                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-4'>
                <button onClick={props.search} className='border-sky-500 border text-sky-500 px-4'>Search</button>
            </div>
        </div>
    )
}

export default Search