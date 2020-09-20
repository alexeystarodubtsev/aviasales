import {CHEAP, FAST} from "./payloads"

export default (sort) => (t1,t2) => {
    if (sort === FAST)
        return (t1.segments[0].duration + t1.segments[1].duration - t2.segments[0].duration - t2.segments[1].duration);
    if (sort === CHEAP)
       return (t1.price - t2.price)
    return 0;
}