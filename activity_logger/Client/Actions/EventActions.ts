import { baseUrl } from "@/app/globals";
import { LoggerInfoDetails } from "@/server/type/LoggerInfoDetails";
import axios from "axios";
import useSWR from "swr";

export async function GetEvents(page: number, size: number, searchKey: string | null, filters: EventFilter): Promise<LoggerInfoDetails[]> {
    var response = await axios.get("/api/events", { params: { page: page, size: size, search: searchKey, ...filters } })
    return response.data
}

export function GetEventsSWR(page: number,
    size: number,
    searchKey: string | null,
    filters: EventFilter,
    successCallback: (data: any, key: string, config: any) => void): FetchedData<LoggerInfoDetails[]> {
    const { data, isLoading } = useSWR("Events", async () => {
        var response = await axios.get("/api/events", { params: { page: page, size: size, search: searchKey, ...filters } })
        return response.data
    }, {
        onSuccess: successCallback
    })
    return { data, isLoading } as FetchedData<LoggerInfoDetails[]>
}
