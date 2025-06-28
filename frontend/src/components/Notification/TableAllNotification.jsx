// TableAllNotification.jsx
import { DummyNotifications } from "../dummyData/DummyNotifications";

export function TableAllNotification({ data }) {
    return (
        <div className="p-4 m-2 overflow-x-auto rounded-md shadow-md bg-white">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">All Notifications</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {DummyNotifications.map((dayData) => (
                    <div key={dayData.id} className="flex flex-col">
                        <label className="text-xs font-light mb-1 text-gray-600">{dayData.day}</label>
                        {dayData.notify.map((notifyData) => {
                            return (<div className="py-3">
                                <DataNotifyDay key={notifyData.id} data={notifyData} />
                            </div>)
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

function DataNotifyDay({ data }) {
    return (
        <div className="bg-slate-100 rounded-md p-4 space-y-3">
            <span className="inline-block bg-blue-200 text-blue-600 text-sm font-medium px-3 py-1 rounded">
                {data.category}
            </span>

            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                    <p className="text-sm text-gray-700">{data.message}</p>
                    <p className="text-xs font-light text-gray-500 mt-1">
                        {data.date} {data.time}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end">
                    {(data.status || []).map((status) => (
                        <DataNotifyStatus key={status} data={status} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function DataNotifyStatus({ data }) {
    let bgColor = "";
    let textColor = "";

    switch (data) {
        case "Mark as read":
            bgColor = "bg-green-100";
            textColor = "text-green-600";
            break;
        case "Dismiss":
            bgColor = "bg-red-100";
            textColor = "text-red-600";
            break;
        case "Leave":
            bgColor = "bg-blue-100";
            textColor = "text-blue-600";
            break;
        default:
            bgColor = "bg-gray-100";
            textColor = "text-gray-600";
    }

    return (
        <button className={`px-3 py-1 rounded ${bgColor} ${textColor} text-sm`}>
            {data}
        </button>
    );
}