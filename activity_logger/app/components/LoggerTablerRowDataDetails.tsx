import { LoggerInfoDetails } from "@/type/LoggerInfoDetails";

export default function LoggerTablerRowDataDetails({actorData, actionData, date}: LoggerInfoDetails){
    return (
        <>
            <td colSpan={4} className="bg-gray-600 h-[300px] w-[100%] relative">
                  <div className="details border bg-white border-lightGray rounded-xl shadow p-8 grid grid-cols-3 ">
                    <div className="segment ">
                      <div className="title uppercase text-fontGray font-medium">
                        Actor
                      </div>
                      <div className="Attibute-grid grid segment-grid gap-y-2.5 mt-3.5">
                        <div className="text-fontGray font-normal">Name</div>
                        <div>{actorData.name}</div>
                        <div className="text-fontGray font-normal">Email</div>
                        <div>{actorData.email}</div>
                        <div className="text-fontGray font-normal">ID</div>
                        <div>{actorData.id}</div>
                      </div>
                    </div>
                    <div className="segment ">
                      <div className="title uppercase text-fontGray font-medium">
                        Action
                      </div>
                      <div className="Attibute-grid grid segment-grid gap-y-2.5 mt-3.5">
                        <div className="text-fontGray font-normal">Name</div>
                        <div>{actionData.name}</div>
                        <div className="text-fontGray font-normal">Object</div>
                        <div>{actionData.object}</div>
                        <div className="text-fontGray font-normal">ID</div>
                        <div>{actionData.id}</div>
                      </div>
                    </div>
                    <div className="segment ">
                      <div className="title uppercase text-fontGray font-medium">
                        Date
                      </div>
                      <div className="Attibute-grid grid segment-grid gap-y-2.5 mt-3.5">
                        <div className="text-fontGray font-normal">Readable</div>
                        <div>{date}</div>
                      </div>
                    </div>
                    <div className="segment ">
                      <div className="title uppercase text-fontGray font-medium">
                        MetaData
                      </div>
                      <div className="Attibute-grid grid segment-grid gap-y-2.5 mt-3.5">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[250px]"></div>
                      </div>
                    </div>
                    <div className="segment ">
                      <div className="title uppercase text-fontGray font-medium">
                        Target
                      </div>
                      <div className="Attibute-grid grid segment-grid gap-y-2.5 mt-3.5">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[250px]"></div>
                      </div>
                    </div>
                  </div>
                </td>
        </>
    );

}