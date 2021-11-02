import { Link } from "react-router-dom";

export default function EmptyPage() {
    return (
        <>
            <h2>It's a wrong approach.</h2>
            <Link to="/">back</Link>
        </>
    );
}