
type props = {
    title: string
    fields: { key: string, value: string }[]
}
export default function DetailsSegment({ title, fields }: props) {
    return (
        <div className="segment">
            <div className="title uppercase text-fontGray font-medium">
                {title}
            </div>
            <div className="Attibute-grid grid segment-grid gap-y-2.5 mt-3.5 overflow-hidden">
                {
                    fields.map(e => (
                        <>
                            <div className="text-fontGray font-normal">{e.key}</div>
                            <div className="w-full overflow-x-hidden  text-ellipsis">{e.value}</div>
                        </>
                    ))
                }

            </div>
        </div>
    )
}