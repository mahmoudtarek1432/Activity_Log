import { LoggerInfoDetails } from '@/type/LoggerInfoDetails'
import { create } from 'zustand'

type action = {
  updateList(events: LoggerInfoDetails[]): void,
  toggle(eventId: string): void
  incrementPage(): void
}

type state = {
  eventList: LoggerInfoDetails[],
  page: number,
  toggledEventId: string
}

const useEventStore = create<state & action>((set) => ({
  eventList: [],
  page: 0,
  toggledEventId: "",
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
  toggle(eventId) {
    set((state) => ({
      ...state,
      toggledEventId: eventId
    }))

  }
}))

export default useEventStore;