import { LoggerInfoDetails } from '@/type/LoggerInfoDetails'
import { create } from 'zustand'

type action = {
  refreshList(events: LoggerInfoDetails[]): void
  updateList(events: LoggerInfoDetails[]): void,
  toggle(eventId: string): void
  incrementPage(): void
  setPage(index: number): void
  setHasMoreItems(predicate: boolean): void
}

type state = {
  eventList: LoggerInfoDetails[],
  page: number,
  toggledEventId: string,
  hasMoreItems: boolean
}

const useEventStore = create<state & action>((set) => ({
  eventList: [],
  page: 0,
  toggledEventId: "",
  hasMoreItems: true,
  refreshList(events: LoggerInfoDetails[]) {
    set((state) => ({
      ...state,
      eventList: events
    }))
  },
  updateList(events) {
    set((state) => ({
      ...state,
      eventList: this.eventList.concat(events)
    }))

  },
  incrementPage() {
    set((state) => ({
      ...state,
      page: this.page + 1
    }))

  },
  setPage(index: number) {
    set((state) => ({
      ...state,
      page: index
    }))

  },
  toggle(eventId) {
    set((state) => ({
      ...state,
      toggledEventId: eventId
    }))

  },
  setHasMoreItems(predicate: boolean) {
    set((state) => ({
      ...state,
      hasMoreItems: predicate
    }))

  }
}))

export default useEventStore;