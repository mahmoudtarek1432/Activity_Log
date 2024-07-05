
import { EventRepository } from "@/server/Repo/EventRepository";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, response: NextResponse) {
    var page = Number.parseInt(request.nextUrl.searchParams.get("page")!);
    var size = Number.parseInt(request.nextUrl.searchParams.get("size")!);
    var searchKey = request.nextUrl.searchParams.get("search")!;
    var filter = {
        action_id: Number.parseInt(request.nextUrl.searchParams.get("action_id")!),
        actor_id: request.nextUrl.searchParams.get("actor_id"),
        target_id: request.nextUrl.searchParams.get("target_id"),
        name: request.nextUrl.searchParams.get("name"),
    } as EventFilter

    console.log("params: " + request.nextUrl.searchParams)
    console.log("filters:", filter)

    var eventRepository = new EventRepository();
    var events = await eventRepository.getEventsQuery(size, page, searchKey, filter)
    console.log("event", events)

    return NextResponse.json(events)
}

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        var requestBody = await request.json();

        var eventRepository = new EventRepository();
        var createdEvent = await eventRepository.createEvent(requestBody.id, requestBody.actorId, requestBody.targetId, requestBody.actionId)
        return NextResponse.json(createdEvent)
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({}, { status: 400 })
    }

}