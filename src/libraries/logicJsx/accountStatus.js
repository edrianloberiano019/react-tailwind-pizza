import { UserRemoveIcon, CheckCircleIcon, ShieldExclamationIcon } from "@heroicons/react/solid"

const Pending = (params) => {
    return <ShieldExclamationIcon className="w-5 h-5 text-orange-400" />
}

const Approved = () => {
    return <CheckCircleIcon className="w-5 h-5 text-green-400" />
}

const Declined = () => {
    return <UserRemoveIcon className="w-5 h-5 text-rose-600" />
}

export default function accountStatus(status) {
    if (status === "pending") return <Pending />
    if (status === "approved") return <Approved />
    if (status === "declined") return <Declined />
    return <></>
}
