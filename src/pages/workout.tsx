import PrivateLayout from "@/components/layouts/PrivateLayout"
import { ReactNode } from "react"

const Workout = () => {
    return (
        <div>Workout</div>
    )
}

Workout.getLayout = function getLayout(page: ReactNode) {
    return (
        <PrivateLayout>
            {page}
        </PrivateLayout>
    )
}

export default Workout;