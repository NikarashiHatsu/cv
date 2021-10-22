import Image from "next/image";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Activities() {
    return (
        <div className="relative mt-24">
            <div className="flex relative">
                <h1 className="text-5xl font-serif tracking-widest -left-32 relative">
                    My Activities
                </h1>
                <FontAwesomeIcon
                    className="absolute left-60 -top-2 text-2xl transform -rotate-12"
                    icon={faPhotoVideo}
                />
            </div>
        </div>
    );
}

export default Activities;