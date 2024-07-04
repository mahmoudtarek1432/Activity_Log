import mapEventIntoLoggerDetails from "@/Mapping/EventMap";
import prisma from "@/lib/db";
import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";
import { Event } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
    var page = Number.parseInt(request.nextUrl.searchParams.get("page")!);
    var size = Number.parseInt(request.nextUrl.searchParams.get("size")!);
    var searchKey = request.nextUrl.searchParams.get("search")!;
    console.log("params: " + request.nextUrl.searchParams)

    var query = await prisma.event.findMany({
        include: { actor: true, action: true, target: true },
        take: size,
        skip: (page - 1) * size,
        where: {
            OR: [
                {
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
                }

            ]
        }
    });

    var mapping = query.map(e => mapEventIntoLoggerDetails(e.action, e, e.actor))
    return NextResponse.json(mapping)
}