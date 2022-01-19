import { useRouter } from "next/router";

export default function Detail() {
    const {query} = useRouter();
    console.log(query);
    return "detail";
}