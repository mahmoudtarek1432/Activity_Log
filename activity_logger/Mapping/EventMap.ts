import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";
import { Action, Event, User } from "@prisma/client";

export default function mapEventIntoLoggerDetails(EventAction: Action, eventData: Event, actorData: User, targetData: User, creationDate: Date): LoggerInfoDetails {
    var map: LoggerInfoDetails = {
        targetData: targetData,
        id: eventData.id,
        actionData: { name: EventAction.name, id: eventData.id, object: "test" },
        actorData: { name: actorData.name, address: actorData.address, email: actorData.email, id: actorData.id },
        date: creationDate.toDateString()
    }
    return map
}