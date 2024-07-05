import mapEventIntoLoggerDetails from "@/Mapping/EventMap";
import prisma from "../lib/db";

export class EventRepository {

    async getEventsQuery(size: number, page: number, searchKey: string, filter: EventFilter) {
        var query = await prisma.event.findMany({
            include: { actor: true, action: true, target: true },
            take: size,
            skip: (page - 1) * size,
            where: {
                AND: [
                    {
                        OR: searchKey ? [{
                            actor: {
                                name: {
                                    contains: searchKey
                                }
                            }
                        },
                        {
                            action: {
                                name: {
                                    contains: searchKey
                                }
                            }
                        }] : [{}],
                    },
                    {
                        AND: [
                            {
                                OR: [
                                    (filter.action_id) ?
                                        {
                                            action: {
                                                id:
                                                {
                                                    equals: filter.action_id!,

                                                }
                                            }
                                        } : {}
                                ]
                            },
                            {
                                OR: [
                                    (filter.actor_id) ?
                                        {
                                            actor: {
                                                id:
                                                {
                                                    equals: filter.actor_id!,

                                                }
                                            }
                                        } : {}
                                ]
                            },
                            {
                                OR: [
                                    (filter.target_id) ?
                                        {
                                            target: {
                                                id:
                                                {
                                                    equals: filter.target_id!,

                                                }
                                            }
                                        } : {}
                                ]
                            },
                            {
                                OR: [
                                    (filter.name) ?
                                        {
                                            id: {
                                                equals: filter.name!,
                                            }
                                        } : {}
                                ]
                            }
                        ]
                    }
                ]


            }
        });

        console.log("query", JSON.stringify(query))
        var mapping = query.map(e => mapEventIntoLoggerDetails(e.action, e, e.actor, e.target, e.createdOn))
        console.log("map", mapping)
        return mapping;

    }

    async createEvent(eventId: string, actorId: string, targetId: string, actionId: number) {
        var event = await prisma.event.create({
            data: {
                id: eventId,
                action: { connect: { id: actionId } },
                actor: { connect: { id: actorId } },
                target: { connect: { id: targetId } },
            }

        })
        console.log([eventId, actionId, actorId, targetId])
        return event;
    }
}