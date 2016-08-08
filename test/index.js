import { expect } from "chai";
import { distance } from "../";

describe("The captain's distance", function() {

    it("calculates the distance between two points", () => {
        let coord1 = "48° 12′ 30″ N, 16° 22′ 23″ E";
        let coord2 = "48° 12′ 30″ N, 16° 22′ 23″ E";

        expect(distance(coord1, coord2)).to.equal(0);
    });

});
