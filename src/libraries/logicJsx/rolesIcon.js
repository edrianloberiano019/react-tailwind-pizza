import { LibraryIcon, AnnotationIcon, ExclamationIcon } from "@heroicons/react/solid"

const Developer = () => {
    return <ExclamationIcon className="w-5 h-5 text-orange-400" />
}

const Encoder = () => {
    return <AnnotationIcon className="w-5 h-5 text-green-400" />
}

const Admin = () => {
    return <LibraryIcon className="w-5 h-5 text-rose-600" />
}

export default function rolesIcon(status) {
    if (status === "developer") return <Developer />
    if (status === "encoder") return <Encoder />
    if (status === "admin") return <Admin />
    return <></>
}
