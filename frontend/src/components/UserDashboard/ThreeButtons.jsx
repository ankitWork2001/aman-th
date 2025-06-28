export default function ThreeButtons({
    ApplyForLeave,
    UploadDocument,
    ProfileUpdate
}) {
    return (
        <div className="py-4 my-7 w-full overflow-x-auto rounded-md bg-slate-50 shadow-md">
            <div className="px-5 w-full flex flex-col gap-4 md:flex-row md:justify-between">
                
                <button
                    onClick={ApplyForLeave}
                    className="bg-blue-400 text-white rounded-md px-4 py-2 min-w-fit w-full md:w-fit text-center hover:bg-blue-600">
                    Apply for Leave
                </button>

                <button
                    onClick={UploadDocument}
                    className="bg-blue-400 text-white rounded-md px-4 py-2 min-w-fit w-full md:w-fit text-center hover:bg-blue-600">
                    Upload Documents
                </button>

                <button
                    onClick={ProfileUpdate}
                    className="bg-blue-400 text-white rounded-md px-4 py-2 min-w-fit w-full md:w-fit text-center hover:bg-blue-600">
                    Profile Updates
                </button>

            </div>
        </div>
    );
}
