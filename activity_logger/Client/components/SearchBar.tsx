import { GetEvents } from "@/Client/Actions/EventActions"
import useEventStore from "@/Client/hooks/eventState"
import { useEffect, useState } from "react"
import { pageSize } from "../../app/globals"
import useSearchStore from "@/Client/hooks/searchState"

export default function SearchBar() {
    const [searchDirty, setSearchDirty] = useState(false)
    const [passedInterval, setPassedInterval] = useState(0)

    const eventStore = useEventStore();
    const searchStore = useSearchStore();

    //denotes the number of seconds taken before searching
    const searchTimer = 1000
    const intervalCount = 500
    useEffect(() => {
        console.log("mountInterval")
        const interval = setInterval(searchList, intervalCount)
        return () => {
            clearInterval(interval)
        }
    }, [searchStore.searchKey, passedInterval, eventStore])


    const searchList = () => {
        console.log(searchDirty)
        if (searchDirty == true) {
            setPassedInterval(passedInterval + intervalCount)

            if (passedInterval >= searchTimer) {

                eventStore.setPage(1);

                setPassedInterval(0);
                setSearchDirty(false);
                eventStore.refreshList([]);
                eventStore.setIsLoading(true);
                GetEvents(eventStore.page, pageSize, searchStore.searchKey, { action_id: null, actor_id: null, target_id: null, name: null }).
                    then(res => {

                        eventStore.refreshList(res);
                        eventStore.setIsLoading(false);
                        if (res.length >= pageSize)
                            eventStore.setHasMoreItems(true)
                        else
                            eventStore.setHasMoreItems(false)
                    })
            }
        }
    }

    const keyPressed = (e: any) => {
        searchStore.changeSearchKey(e.target.value)
        setSearchDirty(true)
        setPassedInterval(0)
        console.log(searchStore.searchKey)
    }


    return (
        <input onChange={keyPressed}
            value={searchStore.searchKey}
            className="w-full bg-transparent h-ful outline-0 text-fontGray"
            type="text"
            placeholder="Search name, email or action..." />
    )
}