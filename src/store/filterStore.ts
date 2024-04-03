import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IFilterStore {
    sortValue: string;
    searchValue: string;
    setSortValue: (value: string) => void;
    setSearchValue: (value: string) => void;
}

const filterStore = create<IFilterStore>()(devtools(
    (set,get) => ({
      sortValue: '',
      searchValue: '',
      setSearchValue: (value: string) => set({searchValue: value}),
      setSortValue: (value:string) => set({sortValue: value}) 
    }) 
))

export default filterStore