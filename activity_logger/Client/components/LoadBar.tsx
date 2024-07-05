import { GetEvents } from "@/Client/Actions/EventActions"
import useEventStore from "@/Client/hooks/eventState"
import { pageSize } from "../../app/globals";
import useSearchStore from "@/Client/hooks/searchState";

export default function LoadBar() {

    const eventStore = useEventStore();
    const searchStore = useSearchStore();
    return (
        <>
            {eventStore.hasMoreItems &&
                <div
                    onClick={() => {
                        eventStore.setIsLoading(true);
                        GetEvents(eventStore.page + 1, pageSize, searchStore.searchKey, { action_id: null, actor_id: null, target_id: null, name: null }).
                            then(e => {
                                eventStore.updateList(e)
                                eventStore.incrementPage()
                                if (e.length < pageSize)
                                    eventStore.setHasMoreItems(false)
                                eventStore.setIsLoading(false);
                            })

                    }}
                    className="Load-Bar cursor-pointer w-full uppercase bg-neutral-100 h-14 flex flex-wrap justify-center items-center rounded-b-xl font-semibold text-sm text-stone-500">
                    <div>Load More</div>
                </div>
            }

        </>

    )
}