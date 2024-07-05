import { LoggerInfoDetails } from '@/type/LoggerInfoDetails'
import { create } from 'zustand'

type action = {
  changeSearchKey(key: string): void,
  SetSearchDirtyState(state: boolean): void,
  setPassedInterval(index: number): void
}

type state = {
  searchKey: string,
  searchDirtyState: boolean,
  passedInterval: number
}

const useSearchStore = create<state & action>((set) => ({
  searchKey: "",
  searchDirtyState: false,
  passedInterval: 0,
  changeSearchKey(key: string) {
    set((state) => ({
      ...state,
      searchKey: key
    }))

  },
  SetSearchDirtyState(searchState: boolean) {
    set((state) => ({
      ...state,
      searchDirtyState: searchState
    }))

  },
  setPassedInterval(index: number) {
    set((state) => ({
      ...state,
      passedInterval: index
    }))

  },

}))

export default useSearchStore;