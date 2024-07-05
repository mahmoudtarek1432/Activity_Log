import { LoggerInfoDetails } from "@/server/type/LoggerInfoDetails";
import DetailsSegment from "./DetailsSegment";

type props = {
  loggerInfoDetails: LoggerInfoDetails,
  onClickAction: () => void
}

export default function LoggerTablerRowDataDetails({ loggerInfoDetails, onClickAction }: props) {
  return (
    <>
      <td onClick={onClickAction} colSpan={4} className="bg-gray-600 h-[300px] w-[100%] relative">
        <div className="details border bg-white border-lightGray rounded-xl shadow p-8 grid grid-cols-3 gap-2">
          <DetailsSegment
            title="Actor"
            fields={[
              { key: 'Name', value: loggerInfoDetails.actorData.name },
              { key: 'Email', value: loggerInfoDetails.actorData.email },
              { key: 'ID', value: loggerInfoDetails.actorData.id }
            ]}
          >
          </DetailsSegment>
          <DetailsSegment
            title="Action"
            fields={[
              { key: 'Name', value: loggerInfoDetails.actionData.name },
              { key: 'Object', value: loggerInfoDetails.actionData.object },
              { key: 'ID', value: loggerInfoDetails.actionData.id }
            ]}
          >
          </DetailsSegment>
          <DetailsSegment
            title="Date"
            fields={[
              { key: 'Date', value: loggerInfoDetails.date },

            ]}
          >
          </DetailsSegment>

          <div className="segment ">
            <div className="title uppercase text-fontGray font-medium">
              MetaData
            </div>
            <div className="Attibute-grid grid segment-grid gap-y-2.5 mt-3.5 overflow-hidden">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[250px]"></div>
            </div>
          </div>
          <DetailsSegment
            title="Target"
            fields={[
              { key: 'Name', value: loggerInfoDetails.targetData.name },
              { key: 'ID', value: loggerInfoDetails.targetData.id },
            ]}
          >
          </DetailsSegment>
        </div>
      </td>
    </>
  );

}