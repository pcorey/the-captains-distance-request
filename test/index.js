import { expect } from "chai";
import {
    distance,
    splitOnLatLon
} from "../";

describe("The captain's distance", function() {

    it("calculates the distance between two points", () => {
        expect(distance(
            "48° 12′ 30″ N, 16° 22′ 23″ E",
            "48° 12′ 30″ N, 16° 22′ 23″ E"
        )).to.equal(0);
    });

    it("splits on lat/lon", () => {
        expect(splitOnLatLon("48° 12′ 30″ N, 16° 22′ 23″ E")).to.deep.equal([
            "48° 12′ 30″ N",
            "16° 22′ 23″ E"
        ]);
    });

});
