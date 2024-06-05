import PrivateLayout from "@/components/layouts/PrivateLayout"
import { ReactNode } from "react"

const Exercise = () => {
    return (
        <div>Exercise</div>
    )
};

Exercise.getLayout = function getLayout(page: ReactNode) {
    return (
        <PrivateLayout>
            {page}
        </PrivateLayout>
    )
};

export default Exercise;