import { baseUrl } from "@/app/globals";
import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";
import axios from "axios";

export async function GetEvents(page: number, size: number, searchKey: string | null, filters: EventFilter): Promise<LoggerInfoDetails[]> {
    var response = await axios.get("/api", { params: { page: page, size: size, search: searchKey, ...filters } })
    return response.data
}