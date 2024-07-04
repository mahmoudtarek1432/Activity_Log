import { GetEvents } from "@/Client/Actions/EventActions"
import useEventStore from "@/Client/hooks/eventState"

export default function LoadBar() {

    const eventStore = useEventStore();

    return (
        <div
            onClick={() => {

                GetEvents(eventStore.page + 1, 1, "incident.create_succeeded", { action_id: null, actor_id: null, target_id: null, name: null }).
                    then(e => {
                        eventStore.updateList(e)
                        eventStore.incrementPage()
                    })

            }}
            className="Load-Bar w-full uppercase bg-neutral-100 h-14 flex flex-wrap justify-center items-center rounded-b-xl font-semibold text-sm text-stone-500">
            <div>Load More</div>
        </div>
    )
}