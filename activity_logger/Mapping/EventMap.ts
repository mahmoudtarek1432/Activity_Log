import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";
import { Action, Event, User } from "@prisma/client";

export default function mapEventIntoLoggerDetails(EventAction: Action, eventData: Event, actorData: User): LoggerInfoDetails {
    var map: LoggerInfoDetails = {
        actionData: { name: EventAction.name, id: eventData.id, object: "test" },
        actorData: { name: actorData.name, address: actorData.address, email: actorData.email, id: actorData.id },
        date: "Aug 7, 5:38 PM"
    }
    return map
}