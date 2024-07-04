import mapEventIntoLoggerDetails from "@/Mapping/EventMap";
import prisma from "@/lib/db";
import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";
import { Event } from "@prisma/client";
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

    var mapping = query.map(e => mapEventIntoLoggerDetails(e.action, e, e.actor))
    console.log("map", mapping)
    return NextResponse.json(mapping)
}