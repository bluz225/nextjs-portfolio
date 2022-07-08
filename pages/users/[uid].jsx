import { useRouter } from "next/router";

export default function UserIdPage() {
    // open instance of the router
    const router = useRouter()
    const {uid} = router.query
    return(
        <>
            <h1>Hello user {uid}</h1>
        </>
    )
}