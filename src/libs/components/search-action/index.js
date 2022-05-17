
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'
import Button from '../button'


/**
 * 
 * search bar and call to action component
 */
export default function SearchAction({ showButton, placeholder, onClick, buttonText, tailwind, className, onChange, buttonTour }) {
    return (
        <div>
            <div className={`pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:flex-row-reverse ${tailwind} ${className}`}>

                <div
                    tour={buttonTour}
                >
                    {showButton &&
                        <>

                            <Button
                                tailwind='block sm:hidden w-full'
                                size='small'
                                onClick={onClick}
                            >{buttonText}</Button>



                            <Button
                                tailwind='hidden sm:block'
                                size='small'
                                onClick={onClick}
                            >{buttonText}</Button>
                        </>}
                </div>



                <div className="mt-3 sm:mt-0 sm:mr-4">
                    <label htmlFor="search-candidate" className="sr-only">
                        Search
                    </label>
                    <div className="flex rounded-md shadow-sm">
                        <div className="relative flex-grow focus-within:z-10">

                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>

                            <input
                                onChange={(e) => onChange && onChange(e.target.value)}
                                type="text"
                                name="search-candidate"
                                id="search-candidate"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-md pl-10 sm:hidden border-gray-300"
                                placeholder={placeholder}
                            />
                            <input
                                onChange={(e) => onChange && onChange(e.target.value)}
                                type="text"
                                name="search-candidate"
                                id="search-candidate"
                                className="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-md pl-10 sm:block sm:text-sm border-gray-300"
                                placeholder={placeholder}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className='h-px border-gray-100 border-t w-full mb-8' />
        </div>
    )
}

