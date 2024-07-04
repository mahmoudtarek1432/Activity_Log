

import { Span } from "next/dist/trace";
import Image from "next/image";

import LoggerTableRowData from "@/app/components/LoggerTableRowData";
import LoggerTablerRowDataDetails from "@/app/components/LoggerTablerRowDataDetails";
import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";
import prisma from "@/lib/db";
import mapEventIntoLoggerDetails from "@/Mapping/EventMap";
import axios from "axios";
import { Prisma } from "@prisma/client";
import { GetEvents } from "@/Client/Actions/EventActions";
import SearchBar from "./components/SearchBar";
import SkeletonRow from "./components/SkeletonRow";
import LoadBar from "./components/LoadBar";
import useEventStore from "@/Client/hooks/eventState";
import EventComponent from "./components/EventComponent";

export default async function Home() {


  return (
    <EventComponent></EventComponent>
  );
}
